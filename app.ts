import express from 'express';
import morgan from 'morgan';

import logger from './logger';
import sequelize from './server';
import employeeRouter from './server/routers/employee.router';
import departmentRouter from './server/routers/department.router';

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true,
  })
);
app.use(morgan('dev'));

const port = 3000;

app.use('/employees', employeeRouter);
app.use('/departments', departmentRouter);

sequelize
    .sync()
    .then(() => {
        app.listen(port, () => {
            logger.log('info', `Server started on port ${port}`);
        });
    })
    .catch(error => {
        logger.log('error', 'Could not connect to database', error);
    });
