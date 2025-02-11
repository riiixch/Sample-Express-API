const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const { connect } = require("./connect");

const { log } = require('console');

const EmployeeSchema = new Schema({
    e_id: String,
    e_fname: String,
    e_lname: String,
    e_role: {
        type: String,
        enum: ["พนักงาน", "หัวหน้าแผนก", "ผู้บริหาร"],
    },
    e_salaer: {
        type: Number,
        validator: function(vaule) {
            return vaule > 0;
        },
        message: "เงินเดือนต้องมากกว่า 0 บาท",
    },
    e_status: Boolean,
}, { strict: false, timestamps: true });

const monEmployee = connect.model('employee', EmployeeSchema);

module.exports = {
    monEmployee
}
