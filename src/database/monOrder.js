const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const { connect } = require("./connect");

const { log } = require('console');

const OrderSchema = new Schema({
    o_id: String,
    o_detial: [
        {
            p_id: String,
            p_price: Number,
            amount: Number,
        }
    ],
    o_price: Number,
}, { strict: false, timestamps: true });

const monOrder = connect.model('order', OrderSchema);

module.exports = {
    monOrder
}
