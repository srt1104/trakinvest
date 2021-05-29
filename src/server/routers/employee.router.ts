import { Router } from 'express';
import {
    getEmployees,
    getEmployeeById,
    addEmployee,
    updateEmployee,
    deleteEmployee
} from '../controllers/employee.controller';

const employeeRouter = Router();

employeeRouter.get('/', getEmployees);
employeeRouter.get('/:id', getEmployeeById);
employeeRouter.post('/', addEmployee);
employeeRouter.put('/:id', updateEmployee);
employeeRouter.delete('/', deleteEmployee);

export default employeeRouter;
