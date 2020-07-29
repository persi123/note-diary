const express = require("express");
const router = express.Router();
const Note = require("../model/Node");

router.post("/" ,async(req,res)=>{
    console.log(req.body.data)
    try{
        const newItem = new Note({
            data: req.body.data
          });
          newItem.save().then(item => res.json(item));
    }catch (err){
        res.status(500).send("Server Error")
    }
})

router.get("/note/:id",async(req,res)=>{
    console.log(req.params)
    try{
        const note=await Note.find({_id:req.params.id})
        res.json(note)
    }catch (err){
        res.status(500).send("Server Error")
    }
})

module.exports=router;