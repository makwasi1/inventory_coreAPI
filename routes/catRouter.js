const express =require('express')
const router = express.Router()

const {addCat,viewCat,getCategory,replaceCategory,newCategoryItem,getCategoryItems,
 updateCategory} = require('../controllers/catController')



const {validateParam,schemas,validateBody} = require('../helpers/routeHelper')

router.route('/category').post(validateBody(schemas.categorySchema),addCat)
router.route('/category').get(viewCat)//gets all the inventory

router.route('/:catId').get(validateParam(schemas.idSchema,'catId'),getCategory)
router.route('/:catId').put(validateParam(schemas.idSchema,'catId'),
                        validateBody(schemas.categorySchema),replaceCategory)
router.route('/:catId').patch(validateParam(schemas.idSchema,'catId'),
validateBody(schemas.optionalSchema),updateCategory)

router.route('/:catId/items')
.get(validateParam(schemas.idSchema,'catId'),getCategoryItems)
.post(validateParam(schemas.idSchema,'catId'),
validateBody(schemas.itemsSchema),newCategoryItem)


module.exports = router;

