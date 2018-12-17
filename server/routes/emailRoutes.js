const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const Mailer= require('../services/Mailer');
const emailTemplate= require('../services/emailTemplates/emailTemplate');

const Email=mongoose.model('emails');

module.exports = app =>{
    app.post('/api/emails', requireLogin, async (req, res) => {
        const {title, subject, body, recipients} = req.body;

        const email = new Email({
            title,
            subject,
            body,
            recipients: recipients.split(',').map(email => ({email: email.trim()})),
            _user: req.user.id,
            dateSent: Date.now()
        });

        // Sending mail
        const mailer = new Mailer(email, emailTemplate(email));
        try {
            await mailer.send();
        }
        catch (err) {
            res.status(422).send(err);
        }
    });
};