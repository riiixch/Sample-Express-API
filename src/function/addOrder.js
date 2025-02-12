const { monOrder } = require("../database/monOrder");
const { monProduct } = require("../database/monProduct");
const { generateRandomID } = require("./randomID");

async function addOrder(data) {
    const { o_detial } = data;

    if (o_detial == null || o_detial.length <= 0) {
        return 400;
    }

    let or_detial = [];
    let o_price = 0;

    o_detial.array.forEach(async order => {
        const res = await monProduct.findOne({ p_name: order.p_name });

        const detial = {
            p_id: res.p_id,
            p_price: res.p_price,
            amount: order.amount,
        }

        or_detial.push(detial);

        o_price += detial.p_price * detial.amount;
    });

    const newOrder = new monOrder({
        o_id: generateRandomID(8),
        o_detial: or_detial,
        o_price: o_price,
        o_status: 1,
    });

    await newOrder.save();
    
    return 200;
}

module.exports = {
    addOrder
}
