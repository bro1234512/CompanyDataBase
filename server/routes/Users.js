const express = require('express');
const usersMongo = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const UserMongo = require('../models/UserMongo');
const requireLogin = require('../middlewares/requireLogin');


usersMongo.use(cors());
process.env.SECRET_KEY = 'secret';





usersMongo.post('/singin', passport.authenticate('local-login' , {
    failureRedirect : '/login'
}), (req,res)=>{

    res.send(req.user);
});



usersMongo.post('/singup', (req, res)=>{
    const userData = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    };
    UserMongo.findOne({
        email:req.body.email
    })
        .then(user => {
            if(!user){
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    userData.password = hash;
                    UserMongo.create(userData)
                        .then(user => {
                            res.json({status: user.email + ' registered!'})
                        })
                        .catch(err =>{
                            res.send('error '+ err)
                        })
                })
            }else{
                res.json({error: 'User already exists'})
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        })
});


usersMongo.get('/profile',requireLogin, (req, res) => {


    UserMongo.findOne({
        _id: req.user._id
    })
        .then(user => {
            if(user){
                res.json(user)
            }
            else{
                res.send("User does not exist")
            }
        })
        .catch(err => {
            res.send('error: '+ err)
        })
});

usersMongo.post('./salarycounter', requireLogin, (req, res)=>{
    const salary = {
        hours : req.body.hours,
        yearsOfWorking : req.body.yearsOfWorking
};

});


module.exports = usersMongo;
