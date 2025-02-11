const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const { connect } = require("./connect");

const { log } = require('console');

const CustomerSchema = new Schema({
    c_id: String,
    c_fname: String,
    c_lname: String,
    c_status: Boolean,
}, { strict: false, timestamps: true });

const monCustomer = connect.model('customer', CustomerSchema);

module.exports = {
    monCustomer
}
