import sequelize from '..';
import Employee from '../models/employee';
import logger from '../../logger';

export async function getEmployees(req, res, next) {
    try {
        await sequelize.sync();
        
        const data = await Employee.findAll({});

        return res.json(data);
    } catch (error) {
        logger.log('error', 'getEmployees()', error);
        res.json(error);
    }
};

export async function getEmployeeById(req, res, next) {
    try {
        const employeeId = req.params.id;

        await sequelize.sync();

        const data = await Employee.findAll({
            where: { employeeId }
        });

        return res.json(data);
    } catch (error) {
        logger.log('error', 'getEmployeeById()', error);
        res.json(error);
    }
};

export async function addEmployee(req, res, next) {
    try {
        const employeeData = req.body;

        await sequelize.sync();

        const data = await Employee.create(employeeData);

        return res.json(data);
    } catch (error) {
        logger.log('error', 'addEmployee()', error);
        res.json(error);
    }
};

export async function updateEmployee(req, res, next) {
    try {
        const employeeId = req.params.id;
        const employeeData = req.body;

        await sequelize.sync();

        const data = await Employee.update(
            employeeData, { where: { employeeId } }
        );

        return res.json(data);
    } catch (error) {
        logger.log('error', 'updateEmployee()', error);
        res.json(error);
    }
};

export async function deleteEmployee(req, res, next) {
    try {
        const employeeId = req.params.id;

        await sequelize.sync();

        const data = await Employee.destroy({
            where: { employeeId }
        });

        return res.json(data);
    } catch (error) {
        logger.log('error', 'deleteEmployee()', error);
        res.json(error);
    }
};
