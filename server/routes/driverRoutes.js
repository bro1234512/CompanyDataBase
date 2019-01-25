const express = require('express');
const driver = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const requireLogin = require('../middlewares/requireLogin');
const bcrypt = require('bcryptjs');

const DriverMongo = require('../models/Driver');
const CarMongo = require('../models/Car');
const DriverCarMongo = require('../models/DriverCar');


driver.use(cors());
process.env.SECRET_KEY = 'secret';

driver.get('/showDrivers',requireLogin, async (req,res)=>{
    await DriverMongo.find({}).then(eachOne => {
        res.json(eachOne);
    })
});

driver.get('/showDriversCars',requireLogin, async (req,res)=>{
    await DriverCarMongo.find({}).then(eachOne => {
        res.json(eachOne);
    })
});

driver.post('/findDriver',requireLogin, async (req,res) =>{
    await DriverMongo.findOne({
        surname: req.body.surname})
        .then(One =>{
            res.json(One);
        })
});

driver.post('/deleteDriver',requireLogin, async (req,res) =>{
    await DriverMongo.findOne({
        surname: req.body.surname})
        .then(One =>{
            if(One){

                DriverMongo.deleteOne({
                    surname: req.body.surname})
                    .then(driverDeleted => {
                        res.json({status: driverDeleted.surname + ' deleted!'})
                    })
                    .catch(err =>{
                        res.send('error '+ err)
                    })

            }else{
                res.json({error: 'Driver does not exist'})
            }
        })
});

driver.post('/driverToCar',requireLogin, async (req,res) =>{

    const driverCar = {
        email: req.body.email,
        registrationNumber: req.body.registrationNumber
    }
    await CarMongo.findOne({
        registrationNumber: req.body.registrationNumber})
        .then(One =>{
            if(One){

                DriverMongo.findOne({
                    email:req.body.email
                }).then(Onee =>{
                    if(Onee){
                        DriverCarMongo.create(driverCar)
                            .then(driverAdded => {
                                res.json({status: driverAdded.email + ' added!'})
                            })
                            .catch(err =>{
                                res.send('error '+ err)
                            })
                    }else{
                        res.json({error: 'Email does not exist'})
                    }
                })

            }else{
                res.json({error: 'Registration number does not exist'})
            }
        })
});
driver.post('/addDriverToDatabase',requireLogin, (req, res)=>{
    const driverData = {

        name: req.body.name,
        surname: req.body.surname,
        birthdayDate: req.body.birthdayDate,
        carLicenseTerm: req.body.carLicenseTerm,
        email: req.body.email
    }
    DriverMongo.findOne({
        email:req.body.email
    })
        .then(driverExist => {
            if(!driverExist){

                DriverMongo.create(driverData)
                    .then(driverAdded => {
                        res.json({status: driverAdded.email + ' added!'})
                    })
                    .catch(err =>{
                        res.send('error '+ err)
                    })

            }else{
                res.json({error: 'Driver already exists'})
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})


module.exports = driver;