const mongoose = require('mongoose');
const  Schema = mongoose.Schema;

const RatingSchema = new Schema({
    rate:{
        type: Number
    }
});

module.exports = mongoose.model('rate',RatingSchema);