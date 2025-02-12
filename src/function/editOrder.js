const { monOrder } = require("../database/monOrder");
const { monProduct } = require("../database/monProduct");

async function editEmployee(data) {
    const { o_id, o_detial, o_status } = data;

    if (o_id == null || o_id == "") {
        return 400;
    } else
    if (o_detial == null || o_detial.length <= 0) {
        return 400;
    }

    const orderData = await monOrder.findOne({ o_id: o_id });

    if (orderData == null) {
        return 400;
    }
    
    orderData.o_detial = e_fname;
    orderData.o_status = o_status;
    
    await employeeData.save();

    return 200;
}

module.exports = {
    editEmployee
}
