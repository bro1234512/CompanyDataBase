const express = require('express');
const usersMongo = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const UserMongo = require('../models/UserMongo');

usersMongo.use(cors());
process.env.SECRET_KEY = 'secret';

usersMongo.post('/singup', (req, res)=>{
    const userData = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }
    UserMongo.findOne({
        email:req.body.email
    })
        .then(user => {
            if(!user){
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    userData.password = hash
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
})

usersMongo.post('/singin', (req,res)=>{
    UserMongo.findOne({
        email: req.body.email
    })
        .then(user => {
            if(user){
                if(bcrypt.compareSync(req.body.password, user.password)){
                    const payload = {
                        _id: user._id,
                        name: user.name,
                        email: user.email
                    }
                    let token = jwt.sign(payload, process.env.SECRET_KEY,{
                        expiresIn: 1440
                    })
                    res.send(token)
                }else{
                    res.json({error: "Uzytkownik nie istnieje"})
                }
            }else{
                res.json({error: "Uzytkownik nie istnieje"})
            }
        })
        .catch(err =>{
            res.send('error: ' +err)
        })
})

usersMongo.get('/profile', (req, res) => {
    var decoded = jwt.verify(req.headers['authorization'],process.env.SECRET_KEY)

    UserMongo.findOne({
        _id:decoded._id
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
})

module.exports = usersMongo;