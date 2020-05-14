const express =require('express')
const {addCat,viewCat,getCategory,replaceCategory,newCategoryItem,getCategoryItems,
 updateCategory} = require('../controllers/catController')

const router = express.Router()
const {validateParams,schemas} = require('../helpers/routeHelper')

router.route('/category').post(addCat)
router.route('/category').get(viewCat)

router.route('/:catId').get(validateParams(schemas.idSchema,'catId'),getCategory)
router.route('/:catId').put(replaceCategory)
router.route('/:catId').patch(updateCategory)

router.route('/:catId/items')
.get(getCategoryItems)
.post(newCategoryItem)


module.exports = router;

