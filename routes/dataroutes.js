const express= require('express');
const {Categories,StylishKurtiCollections,WesternDressesForWomen,StellarStylesForHim } = require('../data')

const router = express.Router();

router.use(express.json())


router.get('/',(req,res)=>{
    res.json({status:true,Categories})
})    
router.get('/skc',(req,res)=>{
    res.json({status:true,StylishKurtiCollections})
})  
router.get('/wdw',(req,res)=>{
    res.json({status:true,WesternDressesForWomen})
})  
router.get('/wdw',(req,res)=>{
    res.json({status:true,StellarStylesForHim})
})  


module.exports = router