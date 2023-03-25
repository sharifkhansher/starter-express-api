const express= require('express');
const {Categories,StylishKurtiCollections,WesternDressesForWomen } = require('../data')

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


module.exports = router