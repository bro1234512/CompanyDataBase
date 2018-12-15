const mongoose = require('mongoose');
const {Schema}= mongoose;
const RecipientSchema = require('./Reciptient');

const mailerSchema= new Schema({

    title: {
        type: String
    },
    body: {
        type: String
    },
    subject: {
        type: String
    },
    recipients: {
        type: [RecipientSchema]
    },
    _user: {
        type: Schema.Types.Object.ObjectId, ref: 'User'
    },
    dateSent: {
        type: Date
    }

});

mongoose.model('mailer', mailerSchema);