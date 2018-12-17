const passport =require('passport');
const GoogleStrategy=require('passport-google-oauth20').Strategy;
const LocalStrategy   = require('passport-local').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');
const User = mongoose.model('users');
const UserMongo = require('../models/UserMongo');

    passport.serializeUser((user, done) => {
        done(null, user.id);

    });

    passport.deserializeUser((id, done) => {
        UserMongo.findById(id)
            .then(user => {
                if(!user){

                    User.findById(id).then(user =>{

                        done(null, user);
                    });
                }
                else {
                    done(null, user);
                }
            });
    });

    passport.use(new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback',
            proxy: true
        },
        (accessToken, refreshToken, profile, done) => {
            User.findOne({googleId: profile.id})
                .then((existingUser) => {
                    if (existingUser) {
                        //we already have a record with the given profile ID
                        done(null, existingUser);
                    } else {
                        //we dont have a user record with this ID, make a new record
                        new User({googleId: profile.id})
                            .save()
                            .then(user => done(null, user));
                    }
                });
        })
    );


    passport.use('local-login', new LocalStrategy({
            // by default, local strategy uses username and password, we will override with email
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
            // allows us to pass back the entire request to the callback
        },
        function (req, email, password, done) { // callback with email and password from our form

            // we are checking to see if the user trying to login already exists

            // find a user whose email is the same as the forms email
            UserMongo.findOne({email: email}).then(user => {

                return done(null, user);
            });

        }));
