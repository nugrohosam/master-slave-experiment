import { MigrationInterface, QueryRunner } from "typeorm";

export class Genreated1700997645114 implements MigrationInterface {
    name = 'Genreated1700997645114'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`phone_number\` varchar(255) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`phone_number\``);
    }

}
