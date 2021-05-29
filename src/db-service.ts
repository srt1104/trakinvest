const VERBOSE = true;

import sequelize from './server';
import Employee from './server/models/employee';
import Department from './server/models/department';

export const getEmployees = () => {
    return new Promise((resolve, reject) => {
        sequelize.sync()
            .then(() => {
                Employee.findAll({})
                    .then(data => {
                        if (VERBOSE)
                            console.log('getEmployees()::successful', data);
                        resolve(data);
                    })
                    .catch(error => {
                        if (VERBOSE)
                            console.log('getEmployees()::failed', error);
                        reject('operation failed');
                    });
            });
    });
};

export const getEmployeeById = employeeId => {
    return new Promise((resolve, reject) => {
        sequelize.sync()
            .then(() => {
                Employee.findAll({
                    where: { employeeId }
                })
                    .then(data => {
                        if (VERBOSE)
                            console.log('getEmployeesById()::successful', data);
                        resolve(data);
                    })
                    .catch(error => {
                        if (VERBOSE)
                            console.log('getEmployeesById()::failed', error);
                        reject('operation failed');
                    });
            });
    });
};

export const getEmployeesByDepartment = department => {
    return new Promise((resolve, reject) => {
        sequelize.sync()
            .then(() => {
                Employee.findAll({
                    where: { department }
                })
                    .then(data => {
                        if (VERBOSE)
                            console.log('getEmployeesByDepartment()::successful', data);
                        resolve(data);
                    })
                    .catch(error => {
                        if (VERBOSE)
                            console.log('getEmployeesByDepartment()::failed', error);
                        reject('operation failed');
                    });
            });
    });
};

export const addEmployee = employeeData => {
    return new Promise((resolve, reject) => {
        sequelize.sync()
            .then(() => {
                Employee.create(employeeData)
                    .then(data => {
                        if (VERBOSE)
                            console.log('addEmployee()::successful', data);
                        resolve(data);
                    })
                    .catch(error => {
                        if (VERBOSE)
                            console.log('addEmployee()::failed', error);
                        reject('operation failed');
                    });
            });
    });
};

export const updateEmployee = (employeeId, employeeData) => {
    return new Promise((resolve, reject) => {
        sequelize.sync()
            .then(() => {
                Employee.update(
                    employeeData, {
                        where: { employeeId }
                    }
                )
                    .then(data => {
                        if (VERBOSE)
                            console.log('updateEmployee()::successful', data);
                        resolve(data);
                    })
                    .catch(error => {
                        if (VERBOSE)
                            console.log('updateEmployee()::failed', error);
                        reject('operation failed');
                    });
            });
    });
};

export const deleteEmployee = employeeId => {
    return new Promise((resolve, reject) => {
        sequelize.sync()
            .then(() => {
                Employee.destroy({
                    where: { employeeId }
                })
                    .then(data => {
                        if (VERBOSE)
                            console.log('deleteEmployee()::successful', data);
                        resolve(data);
                    })
                    .catch(error => {
                        if (VERBOSE)
                            console.log('deleteEmployee()::failed', error);
                        reject('operation failed');
                    });
            });
    });
};




export const getDepartments = () => {
    return new Promise((resolve, reject) => {
        sequelize.sync()
            .then(() => {
                Department.findAll({})
                    .then(data => {
                        if (VERBOSE)
                            console.log('getDepartments()::successful', data);
                        resolve(data);
                    })
                    .catch(error => {
                        if (VERBOSE)
                            console.log('getDepartments()::failed', error);
                        reject('operation failed');
                    });
            });
    });
};

export const getDepartmentById = departmentId => {
    return new Promise((resolve, reject) => {
        sequelize.sync()
            .then(() => {
                Department.findAll({
                    where: { departmentId }
                })
                    .then(data => {
                        if (VERBOSE)
                            console.log('getDepartmentById()::successful', data);
                        resolve(data);
                    })
                    .catch(error => {
                        if (VERBOSE)
                            console.log('getDepartmentById()::failed', error);
                        reject('operation failed');
                    });
            });
    });
};

export const addDepartment = departmentData => {
    return new Promise((resolve, reject) => {
        sequelize.sync()
            .then(() => {
                Department.create(departmentData)
                    .then(data => {
                        if (VERBOSE)
                            console.log('addDepartment()::successful', data);
                        resolve(data);
                    })
                    .catch(error => {
                        if (VERBOSE)
                            console.log('addDepartment()::failed', error);
                        reject('operation failed');
                    });
            });
    });
};

export const updateDepartment = (departmentId, departmentData) => {
    return new Promise((resolve, reject) => {
        sequelize.sync()
            .then(() => {
                Department.update(
                    departmentData, {
                        where: { departmentId }
                    }
                )
                    .then(data => {
                        if (VERBOSE)
                            console.log('updateDepartment()::successful', data);
                        resolve(data);
                    })
                    .catch(error => {
                        if (VERBOSE)
                            console.log('updateDepartment()::failed', error);
                        reject('operation failed');
                    });
            });
    });
};

export default sequelize;