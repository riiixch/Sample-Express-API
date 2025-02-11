const { monCustomer } = require("../database/monCustomer");
const { generateRandomID } = require("./randomID");

async function addCustomer(data) {
    const { c_fname, c_lname } = data;

    if (c_fname == null || c_lname == null || c_fname == "" || c_lname == "") {
        return 400;
    }

    const newCustomer = new monCustomer({
        c_id: generateRandomID(8),
        c_fname: c_fname,
        c_lname: c_lname,
    });

    await newCustomer.save();

    return 200;
}

module.exports = {
    addCustomer
}
