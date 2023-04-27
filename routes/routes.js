const express = require('express');
const router = express.Router()
const Model=require('../model/model')
// Posting data to Database.
// Getting all the data from the Database.
// Getting data based on the ID.
// Updating data based on the ID.
// Deleting data based on the ID.
// res for sending responses to our client, like Postman, or any front-end client. req for receiving requests from a client app like Postman, or any front-end client.

//POST 
router.post('/post', async(req, res) => {
    const data=new Model({
        name:req.body.name,
        age:req.body.age
    })
    try{
        const dataToSave = data.save();
        res.status(200).json(dataToSave)
    }catch(error){
        res.status(400).json({message: error.message})
    }
});

//GET all methods
// Model.find method to fetch all the data from the database. Then, we are returning it back in JSON format. If we have an error, we will get that too.
router.get('/getAll',async(res,req)=>{
    try {
        const data= await Model.find()
        res.json(data)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
});

//GET by ID
// pass the ID of the document, which is req.params.id, in a method called findById.
router.get('/getOne/:id',async(req,res)=>{
    try {
        const data=await Model.findById(req.params.id)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
});

//UPDATE
// passing in the findByIdAndUpdate method, which we use to find a document by ID and update it.
// The req.params.id is the const id, updatedData which contains the req.body, and the options, which specifies whether to return the updated data in the body or not.
router.patch('/update/:id',async(res,req)=>{
    try {
        const id=req.params.id;
        const updatedData=req.body;
        const options={new:true};
        const result=await Model.findByIdAndUpdate(id,updatedData,options)
        } catch (error) {
            res.status(500).json({message:error.message})
    }
})
router.delete('/delete/:id',async(res,req)=>{
    try {
        const id=req.params.id
        const data =await Model.findByIdAndDelete(id)
        res.setEncoding(`Document with ${data.name} has been terminated..`)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})
module.exports = router;