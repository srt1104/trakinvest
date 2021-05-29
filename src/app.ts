import express from 'express';
import { getUsers, getUserById, createUser, updateUser, deleteUser } from './queries';
import sequelize from './server';
import employeeRouter from './server/routers/employee.router';
import departmentRouter from './server/routers/department.router';

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true,
  })
);

const port = 3000;

app.use('/employees', employeeRouter);
app.use('/departments', departmentRouter);

app.get('/users', getUsers);
app.get('/users/:id', getUserById);
app.post('/users', createUser);
app.put('/users/:id', updateUser);
app.delete('/users/:id', deleteUser);

sequelize.sync()
    .then(() => {
        app.listen(port, () => {
            console.log(`server is listening on ${port}`);
        });
    })
    .catch(error => {
        console.log('Unable to sequelize', error);
    });
