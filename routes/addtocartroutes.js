const express= require('express');
const protect = require('../middelware/addtocartmiddelware')

const { getaddtocard, postaddtocard, deleteaddtocard } = require("../controllers/addtocartcontrollers");
const router = express.Router();

router.use(express.json())

router.get('/get',protect,getaddtocard)    
router.post('/add',protect,postaddtocard)
router.delete('/:_id',protect,deleteaddtocard)


module.exports = router;