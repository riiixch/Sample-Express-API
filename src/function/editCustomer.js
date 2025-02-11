const { monCustomer } = require("../database/monCustomer");

async function editCustomer(data) {
    const { c_id, c_fname, c_lname } = data;

    const customerData = await monCustomer.findOne({ c_id: c_id });

    if (customerData == null) {
        return 400;
    }
    
    customerData.c_fname = c_fname;
    customerData.c_lname = c_lname;
    
    await customerData.save();

    return 200;
}

module.exports = {
    editCustomer
}
