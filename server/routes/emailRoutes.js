const requireLogin = require('../middlewares/requireLogin');
const Mailer= require('../services/Mailer');
const emailTemplate= require('../services/emailTemplates/emailTemplate');
const RecipientSchema = require('../models/Reciptient');



module.exports = app =>{
    app.post('/api/emails', requireLogin, async (req, res) => {

        const email={
            title: this.title,
            subject:this.subject,
            body:this.body,
            recipients: [RecipientSchema].split(',').map(email => ({email: email.trim()})),
            _user: req.user.id,
            dateSent: Date.now()
        };

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
