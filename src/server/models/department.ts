import { INTEGER, STRING } from 'sequelize';
import sequelize from '../';

const Department = sequelize.define('Department', {
    departmentId: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: STRING
});

export default Department;
