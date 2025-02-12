const { monEmployee } = require("../database/monEmployee");

async function delEmployee(data) {
    const { e_id } = data;

    if (e_id == null || e_id == "") {
        return 400;
    }
    
    const employeeData = await monEmployee.findOne({ e_id: e_id });

    if (employeeData == null) {
        return 400;
    }

    await employeeData.deleteOne();

    return 200;
}

module.exports = {
    delEmployee
}
