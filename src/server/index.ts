import { Sequelize } from 'sequelize';

const dbname = 'employee';
const user = 'employee';
const password = 'employee';

const sequelize = new Sequelize(dbname, user, password, {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432
});

export default sequelize;
