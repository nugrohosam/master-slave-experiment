import { Factory, Seeder } from "typeorm-seeding";
import { DataSource } from "typeorm";
import { User } from "../../entities/iam/user.entity";
import { randEmail, randFullName, randPassword, randPhoneNumber } from '@ngneat/falso';
import fs from 'fs'

export default class InitialDatabaseSeed implements Seeder {
  public async run(factory: Factory, dataSource: DataSource): Promise<void> {

      const takeDelay = (milisecond: number): Promise<boolean> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(true);
            }, milisecond);
        });
    }

    for(let i = 1; i <= 1000; i++) {
      const users:User[] = [];

      for (let j = 1; j <= 1000; j++) {
        const user = new User();
        user.fullname = (i * j) + randFullName();
        user.email = (i * j) + randEmail();
        user.password = (i * j) + randPassword();
        user.phoneNumber = randPhoneNumber();

        users.push(user)
      }
      
      const totalThen = await dataSource.createQueryRunner('slave').connection.getRepository(User).count();
      const then = new Date();
      await dataSource.createQueryRunner('master').connection.getRepository(User).insert(users);
      
      while(true) {
        const totalNow = await dataSource.createQueryRunner('slave').connection.getRepository(User).count();
        if (totalThen < totalNow) {
          
          try {
            const now = new Date();
            const compareToMs = (now.getTime() - then.getTime()) / 1000;
            console.log(" > need for sync in :", compareToMs,  "ms to complete");

            const buffer = new Buffer("\n"  + (now.getTime() + "|" + compareToMs + "|ms"));
            const file = fs.openSync('delays_comparation.csv', 'a')
            fs.writeFileSync(file, buffer.toString())
            break;
          } catch (err) {
            console.log(err)
            fs.writeFileSync('delays_comparation.csv', '');
          }
        }
      }
      
    }
  }
}