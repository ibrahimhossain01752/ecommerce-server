const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http');
const server = http.createServer(app);
const {Server} = require('socket.io');
const io = new Server(server,{
    cors:'*',
    method:'*'
})

app.use(cors());
app.use(express.urlencoded({ extended: true }));



server.listen(5000, ()=> {
    console.log('listening on port',5000)
})