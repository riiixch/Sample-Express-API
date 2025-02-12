require('dotenv').config();
const express = require('express');
const cors = require("cors");

const app = express();

const port = process.env.API_PORT;

const { log } = require('console');

// Call Function

const { getCustomer } = require('./src/function/getCustomer');
const { addCustomer } = require('./src/function/addCustomer');
const { delCustomer } = require('./src/function/delCustomer');
const { editCustomer } = require('./src/function/editCustomer');

const { getEmployee } = require('./src/function/getEmployee');
const { addEmployee } = require('./src/function/addEmployee');
const { delEmployee } = require('./src/function/delEmployee');
const { editEmployee } = require('./src/function/editEmployee');

const { getProduct } = require('./src/function/getProduct');
const { getOrder } = require('./src/function/getOrder');

// Setup Express Server

app.use(express.static('public'));
app.use(express.json());
app.use(cors());

// Cutomer

app.get('/api/get/customer', async (req, res) => {
    const customerData = await getCustomer();

    return res.json({ data: customerData });
});

app.post('/api/add/customer', async (req, res) => {
    const code = await addCustomer(req.body);

    return res.json({ code });
});

app.post('/api/del/customer', async (req, res) => {
    const code = await delCustomer(req.body);
    
    return res.json({ code });
});


app.post('/api/edit/customer', async (req, res) => {
    const code = await editCustomer(req.body);

    return res.json({ code });
});

// Employee

app.get('/api/get/employee', async (req, res) => {
    const employeeData = await getEmployee();

    return res.json({data: employeeData});
});

app.post('/api/add/employee', async (req, res) => {
    const code = await addEmployee(req.body);

    return res.json({ code });
});

app.post('/api/del/employee', async (req, res) => {
    const code = await delEmployee(req.body);
    
    return res.json({ code });
});


app.post('/api/edit/employee', async (req, res) => {
    const code = await editEmployee(req.body);

    return res.json({ code });
});

// Order

app.get('/api/get/order', async (req, res) => {
    const orderData = await getOrder();

    return res.json({data: orderData});
});

app.post('/api/add/order', async (req, res) => {
    const code = await addCustomer(req.body);

    return res.json({ code });
});

app.post('/api/del/order', async (req, res) => {
    const code = await delCustomer(req.body);
    
    return res.json({ code });
});


app.post('/api/edit/order', async (req, res) => {
    const code = await editCustomer(req.body);

    return res.json({ code });
});

// Product

app.get('/api/get/product', async (req, res) => {
    const productData = await getProduct();

    return res.json({data: productData});
});

app.post('/api/add/product', async (req, res) => {
    const code = await addCustomer(req.body);

    return res.json({ code });
});

app.post('/api/del/product', async (req, res) => {
    const code = await delCustomer(req.body);
    
    return res.json({ code });
});


app.post('/api/edit/product', async (req, res) => {
    const code = await editCustomer(req.body);

    return res.json({ code });
});

// Start API Server

app.listen(port, () => {
    require('./src/database/loadData');
    log('[ExpressJS] Website listen port http://localhost:' + port);
});
