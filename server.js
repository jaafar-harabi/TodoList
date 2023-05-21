const express = require('express') ;
const app = express();
require('./config/connect');
require('dotenv').config();


const todoRouter = require('./routes/todo.js')


app.use(express.json());

app.use('/todo',todoRouter) ;




app.listen(process.env.PORT,()=>{
    console.log('Connected To Port')
})
