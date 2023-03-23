const express= require('express');
const protect = require('../middelware/addresmiddelware')

const { getaddress, postaddress, deleteaddress } = require("../controllers/addrescontrollers");
const router = express.Router();

router.use(express.json())

router.get('/get',protect,getaddress)    
router.post('/add',protect,postaddress)
router.delete('/delete/:_id',protect,deleteaddress)


module.exports = router;