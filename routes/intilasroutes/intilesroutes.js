// const { Router, json } = require('express');
const protect = require('../../middelware/intilasmiddelware/intilesmiddelware')
const express = require('express');
const router = express.Router();
router.use(express.json())

const { getintiale, deleteintiale, postintiale } = require('../../controllers/intilascontrollers/intilescontroller');

router.get('/get',protect,getintiale)
router.post('/add',protect,postintiale)
router.delete('/:_id',protect,deleteintiale)




module.exports = router