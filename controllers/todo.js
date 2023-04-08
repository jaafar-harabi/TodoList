const todo = require('../models/todo')


const post = async(req,res)=>{
    try{
        data= req.body
        newData = new todo(data) 
        savedData = await newData.save()
        res.send(savedData)
    }catch(err){
        res.send(err)
    }
}

const getall= async(req,res)=>{
    try{
        
        result = await todo.find()
        res.send(result)
    }catch(err){
        res.send(err)
    }
   

}

const getbyid= async(req,res)=>{
    try{
        Id=req.params.id
        result = await todo.findById({_id:Id})
        res.send(result)
    }catch(err){
        res.send(err)
    }
   

}

const del= async(req,res)=>{
    try{
        Id=req.params.id
        result = await todo.findByIdAndDelete({_id:Id})
        res.send(result)
    }catch(err){
        res.send(err)
    }
   

}
const update= async(req,res)=>{
    try{
        Id=req.params.id
        result = await todo.findByIdAndUpdate({_id:Id},{status:true})
        res.send(result)
    }catch(err){
        res.send(err)
    }
   

}




module.exports = {post,getall,getbyid,del,update}