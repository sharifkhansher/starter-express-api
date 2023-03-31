const protect = require('../../middelware/intilasmiddelware/completemiddelware')
const express = require('express');
const router = express.Router();
router.use(express.json())

const {  getComplete, deleteComplete, postComplete} = require('../../controllers/intilascontrollers/completecontrollers');


router.get('/get',protect,getComplete)
router.post('/add',protect,postComplete)
router.delete('/:_id',protect,deleteComplete)




module.exports = router;