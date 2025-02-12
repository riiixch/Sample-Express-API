const { monEmployee } = require("../database/monEmployee");

async function editCustomer(data) {
    const { e_id, e_fname, e_lname, e_role, e_salary } = data;

    if (e_id == null || e_id == "") {
        return 400;
    } else
    if (e_fname == null || e_fname == "") {
        return 400;
    } else
    if (e_fname == null || e_fname == "") {
        return 400;
    } else
    if (e_role == null || e_role == "") {
        return 400;
    } else
    if (e_salary == null || e_salary == "") {
        return 400;
    } else
    if (!["พนักงาน", "หัวหน้าแผนก", "ผู้บริหาร"].includes(e_role)) {
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
    editCustomer
}
