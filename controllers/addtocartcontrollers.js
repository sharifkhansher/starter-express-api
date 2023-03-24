const jwt = require("jsonwebtoken")
const mongodb = require('mongodb');
const addtocard = require('../Model/addtocartmodel');
const asyncHandler = require('express-async-handler');



const getaddtocard = async(req, res) => {
let data = await addtocard.find({ user_id: req.user});

if(!data.length){
    res.status(200).json({ status: false, massage: "cart is empty"})
}
console.log("====>", data);
res.status(200).json({ status: true, massage: data})

}



const postaddtocard = async (req, res) => {

    const { title, dis, price, reting,img,color,size, quentity } = req.body
    if (!title && !dis && !price && !reting && !img && !color && !size && !quentity ) {
        res.status(400).json({ message: "Please add all Filed" })
    }
    let data = await addtocard.create({ 
        title,
        dis,
        img,
        price,
        reting,
        color,
        size,
        quentity,
        user_id:req.user

    });
    console.log("====>", data);
    res.status(200).json(data)
}


const deleteaddtocard =async(req,res)=>{
    const data = await addtocard.findById(req.params._id);
    console.log("find id ===>",data);

    console.log("=======>",req.params._id);
   if(!data){
   res.ststus(400);
   res.json("user not found ")
   }
    const deleteResult = await addtocard.deleteMany({_id: data._id});
    console.log("=====delete data=====>",deleteResult)
    res.status(200).json({massage:`delete data ${req.params._id}`}) 
}




module.exports = {
    getaddtocard, postaddtocard, deleteaddtocard
}