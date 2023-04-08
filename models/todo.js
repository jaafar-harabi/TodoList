const mongoose = require('mongoose')


const todo = mongoose.model('todo',{
    text:{
        type:String
        

    },
    date:{
        type:String,
        default:new Date()
    },
    status:{
        type:Boolean,
        default:false
    }
})
   


module.exports= todo