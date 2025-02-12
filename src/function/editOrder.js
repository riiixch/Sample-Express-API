const { monOrder } = require("../database/monOrder");
const { monProduct } = require("../database/monProduct");

async function editEmployee(data) {
    const { o_id, o_detial } = data;

    if (o_id == null || o_id == "") {
        return 400;
    } else
    if (o_detial == null || o_detial.length <= 0) {
        return 400;
    }

    const employeeData = await monEmployee.findOne({ e_id: e_id });

    if (employeeData == null) {
        return 400;
    }
    
    employeeData.e_fname = e_fname;
    employeeData.e_lname = e_lname;
    employeeData.e_role = e_role;
    employeeData.e_salary = e_salary;
    
    await employeeData.save();

    return 200;
}

module.exports = {
    editEmployee
}
