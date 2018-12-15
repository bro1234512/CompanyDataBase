const mongoose = require('mongoose');
const  Schema = mongoose.Schema;

const CarSchema = new Schema({
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
    }

});

module.exports = mongoose.model('car',CarSchema);
