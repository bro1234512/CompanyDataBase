const express = require('express');
const car = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const CarMongo = require('../models/Car');

car.use(cors());
process.env.SECRET_KEY = 'secret';

car.get('/showCars', async (req,res)=>{
     await CarMongo.find({}).then(eachOne => {
        res.json(eachOne);
    })
});

car.post('/addCarToDatabase', (req, res)=>{
    const carData = {

        registrationNumber: req.body.registrationNumber,
        mark: req.body.mark,
        model: req.body.model,
        ageGroup: req.body.ageGroup,
        carReviewTerm: req.body.carReviewTerm
    }
    CarMongo.findOne({
        email:req.body.registrationNumber
    })
        .then(carExist => {
            if(!carExist){

                    CarMongo.create(carData)
                        .then(carAdded => {
                            res.json({status: carAdded.mark + ' registered!'})
                        })
                        .catch(err =>{
                            res.send('error '+ err)
                        })

            }else{
                res.json({error: 'Car already exists'})
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})


module.exports = car;