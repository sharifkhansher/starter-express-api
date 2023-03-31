const protect = require('../middelware/todomiddelware')
const express = require('express');
const router = express.Router();
router.use(express.json())

const { gettodo,  posttodo ,deletetodo} = require('../controllers/todocontrollers');


router.get('/get',protect,gettodo)
router.post('/add',protect,posttodo)
router.delete('/:_id',protect,deletetodo)




module.exports = router;