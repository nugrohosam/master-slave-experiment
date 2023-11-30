import dotenv from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';

dotenv.config();

const dataSourceOptions: DataSourceOptions = {
    name: 'main-database',
    type: "mysql",
    host: process.env.DB_HOSTNAME_MASTER,
    port: +(process.env.DB_PORT_MASTER || "3306"),
    username: process.env.DB_USERNAME_MASTER,
    password: process.env.DB_PASSWORD_MASTER,
    database: process.env.DB_DATABASE_MASTER,
    synchronize: false,
    logging: false,
    entities: ['entities/**/*.entity.ts'],
    migrations: ['database/migrations/*.ts'],
};

const dataSource = new DataSource(dataSourceOptions)
export default dataSource