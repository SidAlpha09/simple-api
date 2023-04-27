const mongoose=require('mongoose')

//name and an age property. Both fields have types and both are required.
const dataSchema=new mongoose.Schema({
    name:{
        required:true,
        type:String
    },
    age:{
        required:true,
        type:Number
    }
})
module.exports=mongoose.model('Data',dataSchema)