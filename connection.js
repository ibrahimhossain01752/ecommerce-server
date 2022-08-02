require('dotenv').config();

const mongoose = require('mongoose');

const connectionStr = "";

mongoose.connect(connectionStr, {useNewUserParser: true})
.then(()=> console.log('Connected to Mongo'))
.catch(err => console.log(err))