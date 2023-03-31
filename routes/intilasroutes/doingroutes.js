const protect = require('../../middelware/intilasmiddelware/doingmiddelware')
const express = require('express');
const router = express.Router();
router.use(express.json())

const { getDoing, postDoing, deleteDoing} = require('../../controllers/intilascontrollers/doingcontrollers');


router.get('/get',protect,getDoing)
router.post('/add',protect,postDoing)
router.delete('/:_id',protect,deleteDoing)




module.exports = router;