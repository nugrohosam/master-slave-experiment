import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { config } from '../config';
import { User } from 'entities/iam/user.entity';

export const databaseConnection: TypeOrmModuleOptions  = {
    type: 'mysql',
    replication: {
        master: {
            host: config.database.master.host,
            port: config.database.master.port,
            username: config.database.master.username,
            password: config.database.master.password,
            database: config.database.master.database,
        },
        slaves: [
            {
                host: config.database.slaves[0].host,
                port: config.database.slaves[0].port,
                username: config.database.slaves[0].username,
                password: config.database.slaves[0].password,
                database: config.database.slaves[0].database,
            },
            {
                host: config.database.slaves[1].host,
                port: config.database.slaves[1].port,
                username: config.database.slaves[1].username,
                password: config.database.slaves[1].password,
                database: config.database.slaves[1].database,
            },
        ],
    },
    extra: {
        connectionLimit: 10
    },
    entities: [
        User
    ],
    synchronize: true,
}