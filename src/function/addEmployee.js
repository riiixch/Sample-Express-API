const { monEmployee } = require("../database/monEmployee");
const { generateRandomID } = require("./randomID");

async function addEmployee(data) {
    const { e_fname, e_lname, e_role, e_salary } = data;

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

    const newEmployee = new monEmployee({
        e_id: generateRandomID(8),
        e_fname: e_fname,
        e_lname: e_lname,
        e_role: e_role,
        e_salary: e_salary,
    });

    await newEmployee.save();
    
    return 200;
}

module.exports = {
    addEmployee
}
