const mongoose = require('mongoose');
const  Schema = mongoose.Schema;

const DriverCar = new Schema({

    email:{
        type: String
    },
    registrationNumber:{
        type: String
    }
});

module.exports = mongoose.model('drivertocar',DriverCar);