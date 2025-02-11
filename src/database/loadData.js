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
            e_salaer: 30000,
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
        let pData = new monProduct({
            p_id: generateRandomID(8),
            p_name: "Banana",
            p_price: 20,
            p_stock: 999,
        });
    
        await pData.save();
    }
    
    if ((await monOrder.find()).length <= 0) {
        let pData = await monProduct.findOne({ p_name: "Banana" })

        let oData = new monOrder({
            o_id: generateRandomID(8),
            o_detial: [
                {
                    p_id: pData.p_id,
                    p_price: pData.p_price * 5,
                    amount: 5,
                }
            ],
            o_price: 100,
        });
    
        await oData.save();
    }
}

loadData();
