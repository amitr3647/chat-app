const  chats  = require('./data/data')
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
dotenv.config();
connectDB();
const app = express();
const port = process.env.PORT || 5000;
console.log('port',port)
app.get('/',(req,res)=> {
    res.send('api is success121');
})
app.get('/api/chats',(req,res)=> {
res.send(chats);
})
app.get('/api/chats/:id',(req,res)=> {
   const chat =  chats.filter(chat=>chat._id === req.params.id);;
   res.send(chat);
})
app.listen(port, ()=> {
    console.log('hurrray it runs')
})