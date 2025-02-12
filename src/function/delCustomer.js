const { monCustomer } = require("../database/monCustomer");

async function delCustomer(data) {
    const { c_id } = data;

    if (c_id == null || c_id == "") {
        return 400;
    }

    const customerData = await monCustomer.findOne({ c_id: c_id });

    if (customerData == null) {
        return 400;
    }

    await customerData.deleteOne();

    return 200;
}

module.exports = {
    delCustomer
}
