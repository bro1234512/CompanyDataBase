const mongoose = require('mongoose');
const  Schema = mongoose.Schema;

const DriverSchema = new Schema({
    registrationNumber:{
        type: String
    },
    mark:{
        type: String
    },
    model:{
        type: String
    },
    ageGroup:{
        type: Number
    },
    carReviewTerm:{
        type: Date
    },
    email:{
        type: Date
    }
});

module.exports = mongoose.model('driver',DriverSchema);