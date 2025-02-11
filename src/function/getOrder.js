const { monOrder } = require("../database/monOrder");

async function getOrder() {
    const orderData = await monOrder.find();

    return orderData;
}

module.exports = {
    getOrder
}
