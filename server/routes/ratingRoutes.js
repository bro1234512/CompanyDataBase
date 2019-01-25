const express = require('express');
const rate = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const requireLogin = require('../middlewares/requireLogin');

const RatingMongo = require('../models/Rating');

rate.use(cors());
process.env.SECRET_KEY = 'secret';

rate.get('/showRate',requireLogin, async (req,res)=>{
    await RatingMongo.find({}).then(eachOne => {
        res.json(eachOne);
    })
});

rate.post('/ratings',requireLogin, async (req,res)=>{
    const ratingData = {
        rate: req.body.rate
    }
    RatingMongo.create(ratingData)
        .then(ratingAdded => {
            res.json(' added!')
        })
        .catch(err =>{
            res.send('error '+ err)
        })

});
module.exports = rate;