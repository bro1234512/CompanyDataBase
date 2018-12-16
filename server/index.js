const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
var cors = require("cors");
var morgan = require("morgan")
var bodyParser = require("body-parser");
require('./models/User');
require('./models/Car');
require('./models/Driver');
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
var Drivers = require('./routes/driverRoutes');
app.use('/car', Cars);
app.use('/usersMongo', Users)
app.use('/driver',Drivers);
app.use('/usersMongo', Users);
require('./routes/authRoutes')(app);
require('./routes/emailRoutes')(app);

if(process.env.NODE_ENV === 'production') {
    // express will serve up production assets
    // like our main.js file, or main.css file
    app.use(express.static('client/build'));


    // express will serve up the index.html file
    // if it doesn't recognize the route

    const path = require('path');
    app.get('*',(req, res)=>{
       res.sendFile((path.resolve(__dirname,'client', 'build', 'index.html')));
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);