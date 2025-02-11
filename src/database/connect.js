require('dotenv').config();
const mongoose = require('mongoose');

const mongoURI = process.env.MONGO_URI;
const DBname = process.env.DATABASE_NAME;

const connect = mongoose.createConnection(mongoURI + DBname);

if (connect) {
    console.log('🔥 MongoDB Connected Successfully!');
} else {
    console.error('❌ MongoDB Connection Failed:', error.message);
    process.exit(1);
}

module.exports = {
    connect
}
