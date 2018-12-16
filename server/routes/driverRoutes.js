const express = require('express');
const driver = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const DriverMongo = require('../models/Driver');

driver.use(cors());
process.env.SECRET_KEY = 'secret';

driver.get('/showDrivers', async (req,res)=>{
    await DriverMongo.find({}).then(eachOne => {
        res.json(eachOne);
    })
});

driver.post('/findDriver', async (req,res) =>{
    await DriverMongo.findOne({
        surname: req.body.surname})
        .then(One =>{
            res.json(One);
        })
});

driver.post('/addDriverToDatabase', (req, res)=>{
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