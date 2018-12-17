const mongoose = require('mongoose');
const  Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');



const UserMongoSchema = new Schema({

    email:{
        type: String
    },
    password:{
        type: String
    }
})
UserMongoSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
UserMongoSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('usersMongo',UserMongoSchema);