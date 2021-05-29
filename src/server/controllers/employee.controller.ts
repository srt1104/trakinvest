import sequelize from '../';
import Employee from '../models/employee';

export async function getEmployees(req, res, next) {
    try {
        await sequelize.sync();
        
        const data = await Employee.findAll({});

        return res.json(data);
    } catch (error) {
        console.log('getEmployees()::failed', error);
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
        console.log('getEmployeesById()::failed', error);
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
        console.log('addEmployee()::failed', error);
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
        console.log('updateEmployee()::failed', error);
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
        console.log('deleteEmployee()::failed', error);
        res.json(error);
    }
};
