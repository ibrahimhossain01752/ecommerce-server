const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http');
require('./connection');
const server = http.createServer(app);
const {Server} = require('socket.io');
const io = new Server(server,{
    cors:'*',
    method:'*'
})

const User = require('./models/user');
const useRoutes = require('./routes/useRoutes')

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/users', useRoutes)
// app.use('');



server.listen(5000, ()=> {
    console.log('listening on port',5000)
})