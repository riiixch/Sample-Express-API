const { monOrder } = require("../database/monOrder");

async function delOrder(data) {
    const { o_id } = data;

    if (o_id == null || o_id == "") {
        return 400;
    }
    
    const orderData = await monOrder.findOne({ o_id: o_id });

    if (orderData == null) {
        return 400;
    }

    await orderData.deleteOne();

    return 200;
}

module.exports = {
    delOrder
}
