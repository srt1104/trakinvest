import { Router } from 'express';
import {
    getDepartments,
    getDepartmentById,
    addDepartment,
    updateDepartment,
    deleteDepartment
} from '../controllers/department.controller';

const departmentRouter = Router();

departmentRouter.get('/', getDepartments);
departmentRouter.get('/:id', getDepartmentById);
departmentRouter.post('/', addDepartment);
departmentRouter.put('/:id', updateDepartment);
departmentRouter.delete('/:id', deleteDepartment)

export default departmentRouter;
