const { monEmployee } = require("../database/monEmployee");

async function getEmployee() {
    const employeeData = await monEmployee.find();

    return employeeData;
}

module.exports = {
    getEmployee
}
