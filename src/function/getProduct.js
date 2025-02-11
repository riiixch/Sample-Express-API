const { monProduct } = require("../database/monProduct");

async function getProduct() {
    const productData = await monProduct.find();

    return productData;
}

module.exports = {
    getProduct
}
