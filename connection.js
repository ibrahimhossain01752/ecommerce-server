require('dotenv').config();

const mongoose = require('mongoose');

const connectionStr = 'mongodb+srv://${process.env.Mongo_UserName}:${process.env.Mongo_PW}@cluster0.638jm.mongodb.net/?retryWrites=true&w=majority';
console.log(connectionStr);

mongoose.connect(connectionStr, {useNewUrlparser: true})
.then(()=> console.log('Connected to Mongo'))
.catch(err => console.log(err))

mongoose.connection.on('error', err => {
    console.log(err)
  })


//ecommerce-wt

//9qgbetX8Zt27T6Ha