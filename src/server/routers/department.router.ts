import { Router } from 'express';
import {
    getDepartments,
    getDepartmentById,
    addDepartment,
    updateDepartment
} from '../controllers/department.controller';

const DepartmentRouter = Router();

DepartmentRouter.get('/', getDepartments);
DepartmentRouter.get('/:id', getDepartmentById);
DepartmentRouter.post('/', addDepartment);
DepartmentRouter.put('/:id', updateDepartment);

export default DepartmentRouter;
