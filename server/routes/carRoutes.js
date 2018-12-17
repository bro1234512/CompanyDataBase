const express = require('express');
const car = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { MongoClient } = require('mongodb');
const CarMongo = require('../models/Car');

car.use(cors());
process.env.SECRET_KEY = 'secret';

car.get('/showCars', async (req,res)=>{
     await CarMongo.find({}).then(eachOne => {
        res.json(eachOne);
    })
});

car.post('/findCar', async (req,res) =>{
    await CarMongo.findOne({
        registrationNumber: req.body.registrationNumber})
        .then(One =>{
            res.json(One);
        })
});

car.post('/deleteCar', async (req,res) =>{
    await CarMongo.findOne({
        registrationNumber: req.body.registrationNumber})
        .then(One =>{
            if(One){

                CarMongo.deleteOne({
                    registrationNumber: req.body.registrationNumber})
                    .then(carDeleted => {
                        res.json({status: carDeleted.registrationNumber + ' usunięto!'})
                    })
                    .catch(err =>{
                        res.send('error '+ err)
                    })

            }else{
                res.json({error: 'Auto usunięte!!'})
            }
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