const { monCustomer } = require("../database/monCustomer");

async function addCustomer(args) {
    new monCustomer({
        c_id: "",
        c_fname: "",
        c_lname: "",
    });
}

module.exports = {
    addCustomer
}
