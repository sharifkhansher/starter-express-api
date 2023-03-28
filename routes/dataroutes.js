const express= require('express');
const {Categories,Deshbord} = require('../data')

const router = express.Router();

router.use(express.json())


router.get('/',(req,res)=>{
    res.json({status:true,Categories})
})    
router.get('/d',(req,res)=>{
    res.json({status:true,Deshbord})
 })  
// router.get('/wdw',(req,res)=>{
//     res.json({status:true,WesternDressesForWomen})
// })  
// router.get('/ssh',(req,res)=>{
//     res.json({status:true,StellarStylesForHim})
// })  
// router.get('/s',(req,res)=>{
//     res.json({status:true,Swaiper})
// })


module.exports = router