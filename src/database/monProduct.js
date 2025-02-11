const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const { connect } = require("./connect");

const { log } = require('console');

const ProductSchema = new Schema({
    p_id: String,
    p_name: String,
    p_price: Number,
    p_stock: Number,
}, { strict: false, timestamps: true });

const monProduct = connect.model('product', ProductSchema);

module.exports = {
    monProduct
}
