const { generateRandomID } = require('../function/randomID');
const { monCustomer } = require('./monCustomer');
const { monEmployee } = require('./monEmployee');
const { monOrder } = require('./monOrder');
const { monProduct } = require('./monProduct');

require('./monCustomer');
require('./monOrder');
require('./monProduct');

async function loadData() {
    if ((await monEmployee.find()).length <= 0) {
        let eData = new monEmployee({
            e_id: generateRandomID(8),
            e_fname: "Citlali",
            e_lname: "Creighton",
            e_role: "พนักงาน",
            e_salary: 30000,
            e_status: true,
        });
    
        await eData.save();
    }
    
    if ((await monCustomer.find()).length <= 0) {
        let cData = new monCustomer({
            c_id: generateRandomID(8),
            c_fname: "Philetus",
            c_lname: "Atif",
            c_status: true,
        });
    
        await cData.save();
    }
    
    if ((await monProduct.find()).length <= 0) {
        let bananaData = new monProduct({
            p_id: generateRandomID(8),
            p_name: "Banana",
            p_price: 20,
            p_stock: 999,
        });
    
        let appleData = new monProduct({
            p_id: generateRandomID(8),
            p_name: "Apple",
            p_price: 25,
            p_stock: 999,
        });

        await bananaData.save();
        await appleData.save();
    }
    
    if ((await monOrder.find()).length <= 0) {
        const orderDetial = [
            {
                p_name: "Banana",
                amount: 7,
            },
            {
                p_name: "Apple",
                amount: 3,
            }
        ];

        let o_detial = [];
        let o_price = 0;

        orderDetial.forEach(async order => {
            const res = await monProduct.findOne({ p_name: order.p_name });

            const detial = {
                p_id: res.p_id,
                p_price: res.p_price,
                amount: order.amount,
            }

            o_detial.push(detial);

            o_price += detial.p_price * detial.amount;
        });

        let oData = new monOrder({
            o_id: generateRandomID(8),
            o_detial: o_detial,
            o_price: o_price,
            o_status: 1,
        });
    
        await oData.save();
    }
}

loadData();
