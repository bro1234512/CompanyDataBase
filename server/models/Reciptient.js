const mongoose = require('mongoose');
const {Schema} = mongoose;

const recipientSchema = new Schema({
    email:{
        type: String
    }
});

module.export = recipientSchema;