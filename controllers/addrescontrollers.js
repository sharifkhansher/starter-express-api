const jwt = require("jsonwebtoken")
const mongodb = require('mongodb');
const address = require('../Model/addressmodel');
const asyncHandler = require('express-async-handler');



const getaddress = async(req, res) => {
let data = await address.find({ user_id: req.user});

if(!data.length){
    res.status(200).json({ status: false, massage: "address is empty"})
}
console.log("====>", data);
res.status(200).json({ status: true, massage: data})

}



const postaddress = async(req, res) => {

    const {FirstName , LastName, PhoneNumber, Streetaddress,locality,TownCity,PostCode, state, addresstype } = req.body
    if (!FirstName && !LastName && !PhoneNumber && !Streetaddress && !locality && !TownCity && !PostCode && !state && !addresstype) {
        res.status(400).json({ message: "Please add all Filed" })
    }
    let data = await address.create({ 
        FirstName,
        LastName,
        PhoneNumber,
        Streetaddress,
        locality,
        TownCity,
        PostCode,
        state,
        addresstype,
        user_id:req.user

    });
    console.log("====>", data);
    res.status(200).json(data)
}

const deleteaddress =async(req,res)=>{
    const datas = await address.findById(req.params._id);
    console.log("find id ===>",datas);

    console.log("=======>",req.params._id);
   if(!datas){
   res.ststus(400);
   res.json("user not found ")
   }
    const deleteResult = await address.deleteMany({_id: datas   ._id});
    console.log("=====delete data=====>",deleteResult)
    res.status(200).json({massage:`delete data ${req.params._id}`}) 
}
module.exports ={
    getaddress, 
    postaddress,
    deleteaddress
}