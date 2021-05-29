import express from 'express';
import { getUsers, getUserById, createUser, updateUser, deleteUser } from './queries';
import sequelize, {
    getEmployees,
    getEmployeeById,
    getEmployeesByDepartment,
    addEmployee,
    updateEmployee,
    deleteEmployee,
    getDepartments,
    getDepartmentById,
    addDepartment,
    updateDepartment
} from './db-service';

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true,
  })
);

const port = 3000;

app.get('/', (req, res) => {
  res.json({ info: 'Node.js, Express, and Postgres API' });
});

app.get('/users', getUsers);
app.get('/users/:id', getUserById);
app.post('/users', createUser);
app.put('/users/:id', updateUser);
app.delete('/users/:id', deleteUser);

app.get('/employees', (req, res) => {
    getEmployees()
        .then(data => res.json(data))
        .catch(error => res.json(error))
});

app.get('/employees/:id', (req, res) => {
    const employeeId = req.params.id;

    getEmployeeById(employeeId)
        .then(data => res.json(data))
        .catch(error => res.json(error));
});

app.post('/employees', (req, res) => {
    const employeeData = req.body;

    addEmployee(employeeData)
        .then(data => res.json(data))
        .catch(error => res.json(error));
});

app.put('/employees/:id', (req, res) => {
    const employeeId = req.params.id;
    const employeeData = req.body;

    updateEmployee(employeeId, employeeData)
        .then(data => res.json(data))
        .catch(error => res.json(error));
});

app.delete('/employees/:id', (req, res) => {
    const employeeId = req.params.id;

    console.log('employeeId', employeeId);

    deleteEmployee(employeeId)
        .then(data => res.json(data))
        .catch(error => res.json(error));
});

app.get('/departments', (req, res) => {
    getDepartments()
        .then(data => res.json(data))
        .catch(error => res.json(error))
});

app.get('/departments/:id', (req, res) => {
    const departmentId = req.params.id;

    getDepartmentById(departmentId)
        .then(data => res.json(data))
        .catch(error => res.json(error));
});

app.post('/departments', (req, res) => {
    const departmentData = req.body;

    addDepartment(departmentData)
        .then(data => res.json(data))
        .catch(error => res.json(error));
});

app.put('/departments/:id', (req, res) => {
    const departmentId = req.params.id;
    const departmentData = req.body;

    updateDepartment(departmentId, departmentData)
        .then(data => res.json(data))
        .catch(error => res.json(error));
});

sequelize.sync()
    .then(() => {
        app.listen(port, () => {
            console.log(`server is listening on ${port}`);
        });
    })
    .catch(error => {
        console.log('Unable to sequelize', error);
    });
