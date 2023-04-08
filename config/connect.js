const mongoose = require('mongoose') ;

mongoose.connect('mongodb://127.0.0.1/todoList')
    .then(
        ()=>{console.log('connect to db')}
    ).catch(
        (err)=>{console.log(err)}
    )

module.exports=mongoose ;