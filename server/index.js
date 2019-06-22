const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const passport = require('passport');
const mongoose = require('mongoose');
const mongoUri = require('./config/keys').mongoURI;
const user = require('./routes/api/user');
const group = require('./routes/api/group');
//Add Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(passport.initialize());

//Config for JWT Strategy
require('./strategies/jwtStrategy')(passport);

//Connect to MongoDB
mongoose.connect(mongoUri)
        .then(() => console.log('Mongoose Connected Successfully'))    
        .catch(e => console.log("Mongoose Connection failed " + e));

app.use('/api/user',user);
app.use('/api/group',group);

app.listen(2000, function() {
    console.log('Listening on port 2000');
})