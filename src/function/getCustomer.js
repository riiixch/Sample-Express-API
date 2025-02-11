const { monCustomer } = require("../database/monCustomer");

async function getCustomer() {
    const customerData = await monCustomer.find();

    return customerData;
}

module.exports = {
    getCustomer
}
