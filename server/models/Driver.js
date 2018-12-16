const mongoose = require('mongoose');
const  Schema = mongoose.Schema;

const DriverSchema = new Schema({
    name:{
        type: String
    },
    surname:{
        type: String
    },
    birthdayDate:{
        type: Date
    },
    carLicenseTerm:{
        type: Date
    },
    email:{
        type: String
    }
});

module.exports = mongoose.model('driver',DriverSchema);