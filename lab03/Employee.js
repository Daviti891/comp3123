let employees = [
    {id: 1, firstName: "Pritesh", lastName: "Patel", email: "pritesh@gmail.com", Salary: 5000},
    {id: 2, firstName: "Krish", lastName: "Lee", email: "krish@gmail.com", Salary: 4000},
    {id: 3, firstName: "Racks", lastName: "Jacson", email: "racks@gmail.com", Salary: 5500},
    {id: 4, firstName: "Denial", lastName: "Roast", email: "denial@gmail.com", Salary: 9000}
];

module.exports = {
    getAllEmployees: function () {
        return employees;
    },

    getEmployeeNames: function () {
        return employees
            .map(employee => employee.firstName + " " + employee.lastName)
            .sort();
    },

    getTotalSalary: function () {
        return employees.reduce((total, employee) => total + employee.Salary, 0);
    }
};