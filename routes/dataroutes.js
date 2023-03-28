const express= require('express');
const {Categories,Deshbord,Swaiper1,Swaiper2,Swaiper3,Swaiper4,Swaiper5,Swaiper6} = require('../data')

const router = express.Router();

router.use(express.json())


router.get('/',(req,res)=>{
    res.json({status:true,Categories})
})    
router.get('/d',(req,res)=>{
    res.json({status:true,Deshbord})
 })  
router.get('/s1',(req,res)=>{
    res.json({status:true,Swaiper1})
})  
router.get('/s2',(req,res)=>{
    res.json({status:true,Swaiper2})
})  
router.get('/s3',(req,res)=>{
    res.json({status:true,Swaiper3})
})
router.get('/s4',(req,res)=>{
    res.json({status:true,Swaiper4})
})  
router.get('/s5',(req,res)=>{
    res.json({status:true,Swaiper5})
})  
router.get('/s6',(req,res)=>{
    res.json({status:true,Swaiper6})
})


module.exports = router