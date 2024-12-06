const express = require('express');
const route = express.Router()
module.exports = route;

const Model = require('../model/model');


//post method 

route.post('/post', async (req,res)=>{
    const data = new Model({
        name:req.body.name,
        age:req.body.age,
    })
    try{
        const dataToSave = await data.save()
        res.status(200).json(dataToSave)
    }
    catch(error){
        console.log(error)
    }
});

// GET All method 

route.get('/getAll',async(req,res)=>{
    const data = await Model.find()
    res.json(data)

});

//GET BY ID method

route.get('/getOne/:id',async(req,res)=>{
    const data = await Model.findById(req.params.id);
    res.json(data)
});

//UPDATE by id method 

route.patch('/update/:id',async(req,res)=>{
    try{
        const id = req.params.id;
        const updatedData = req.body;
        const options = {new:true};
        const result =await Model.findByIdAndUpdate(id,updatedData,options)
        res.send(result)

    }
    catch(error){
        res.status(400).json({message:error.message})

    }
})
route.delete('/delete/:id',async(req,res)=>{
    try{
    const id = req.params.id;
    const data = await Model.findByIdAndDelete(id)
    res.send(`Document with ${data.name} has been deleted..`)
    }
    catch(error){
        res.status(400).json({message:error.message})
    }

})