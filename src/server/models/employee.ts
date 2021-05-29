import { INTEGER, STRING } from 'sequelize';
import sequelize from '..';

const Employee = sequelize.define('Employee', {
    employeeId: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: STRING,
    department: INTEGER
});

export default Employee;
