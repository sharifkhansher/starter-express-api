const express = require('express');
const app = express();
const mongodb = require('mongodb')
const db = require('./app');
app.use(express.json())


app.get("/get",async(req,res)=>{
   let dataa = await db();  
   let result = await dataa.find().toArray();
   console.log(result);
   res.jsonres.json(result);
})
app.post("/post",async(req,res)=>{
 let data =  await db();
 let result = await data.insertOne(req.body);
 res.json(result);
 })
 app.put("/:_id",async(req,res)=>{
    let data = await db();
    let result = await  data.updateOne({_id: new mongodb.ObjectId(req.params._id)},{$set:req.body});
    res.json(result);
    console.log(result);
 })
 app.delete("/delete/:_id",async(req,res)=>{
 let data = await db();
 let result =  await data.deleteOne(req.body)  ;
 res.json(result);
 })
app.listen(4000);