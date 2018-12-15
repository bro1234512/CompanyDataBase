const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
var cors = require("cors")
var bodyParser = require("body-parser");
var morgan = require('morgan')

require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();
app.use(bodyParser.json())
app.use(cors())
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(morgan('dev'));
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());
var Users = require('./routes/Users');
var Cars = require('./routes/carRoutes');
app.use('/car', Cars);
app.use('/usersMongo', Users)
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);