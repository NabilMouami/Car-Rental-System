const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const contactSchema = new mongoose.Schema({
    Name: { type: String, required: true },
    Email: { type: String, required: true },
    Number: { type: Number, required: true },
    Message: { type: String, required: true }
})
const Contact =  mongoose.model('Contact', contactSchema);
module.exports = Contact;