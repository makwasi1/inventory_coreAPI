const express =require('express')
const {AddItems,viewItems,deleteItem,specificItem,updateItem} = require('../controllers/itemsController')

const router = express.Router()

router.route('/inventory').post(AddItems)
router.route('/inventory').get(viewItems)
router.route('/:itemsId').delete(deleteItem)
router.route('/:itemsId').get(specificItem)
router.route('/:itemsId').patch(updateItem)







module.exports = router;

