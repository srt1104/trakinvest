import sequelize from '..';
import Department from '../models/department';
import logger from '../../logger';

export async function getDepartments(req, res, next) {
    try {
        await sequelize.sync();
        
        const data = await Department.findAll({});

        return res.json(data);
    } catch (error) {
        logger.log('error', 'getDepartments()', error);
        res.json(error);
    }
};

export async function getDepartmentById(req, res, next) {
    try {
        const departmentId = req.params.id;

        await sequelize.sync();

        const data = await Department.findAll({
            where: { departmentId }
        });

        return res.json(data);
    } catch (error) {
        logger.log('error', 'getDepartmentById()', error);
        res.json(error);
    }
};

export async function addDepartment(req, res, next) {
    try {
        const departmentData = req.body;

        await sequelize.sync();

        const data = await Department.create(departmentData);

        return res.json(data);
    } catch (error) {
        logger.log('error', 'addDepartment()', error);
        res.json(error);
    }
};

export async function updateDepartment(req, res, next) {
    try {
        const departmentId = req.params.id;
        const departmentData = req.body;

        await sequelize.sync();

        const data = await Department.update(
            departmentData, { where: { departmentId } }
        );

        return res.json(data);
    } catch (error) {
        logger.log('error', 'updateDepartment()', error);
        res.json(error);
    }
};

export async function deleteDepartment(req, res, next) {
    try {
        const departmentId = req.params.id;

        await sequelize.sync();

        const data = await Department.destroy({
            where: { departmentId }
        });

        return res.json(data);
    } catch (error) {
        logger.log('error', 'deleteDepartment()', error);
        res.json(error);
    }
};
