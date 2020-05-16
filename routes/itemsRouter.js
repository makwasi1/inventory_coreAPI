const express =require('express')
const {AddItems,
    viewItems,deleteItem,
    specificItem,updateItem} = require('../controllers/itemsController')

const {schemas, validateBody, validateParam} = require('../helpers/routeHelper')
const router = express.Router()

router.route('/items').post(AddItems)
router.route('/items').get(viewItems)



router.route('/:itemsId').delete(validateParam(schemas.idSchema,'itemsId'),deleteItem)
router.route('/:itemsId').get(validateParam(schemas.idSchema,'itemsId'),specificItem)
router.route('/:itemsId').patch(validateParam(schemas.idSchema,'itemsId',validateBody(schemas.optionalItemSchema)),updateItem)


module.exports = router;

