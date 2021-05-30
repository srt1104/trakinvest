import { Sequelize } from 'sequelize';

const dbname = process.env.DB_NAME || 'postgres';
const user = process.env.DB_USER || 'postgres';
const password = process.env.DB_PASS || 'postgres';
const host = process.env.DB_HOST || 'localhost';

const sequelize = new Sequelize(dbname, user, password, {
    host,
    dialect: 'postgres',
    port: 5432,
    logging: false
});

export default sequelize;
