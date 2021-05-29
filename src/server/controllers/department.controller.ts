import sequelize from '../';
import Department from '../models/department';

export async function getDepartments(req, res, next) {
    try {
        await sequelize.sync();
        
        const data = await Department.findAll({});

        return res.json(data);
    } catch (error) {
        console.log('getDepartments()::failed', error);
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
        console.log('getDepartmentsById()::failed', error);
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
        console.log('addDepartment()::failed', error);
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
        console.log('updateDepartment()::failed', error);
        res.json(error);
    }
};
