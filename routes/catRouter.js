const express =require('express')
const router = express.Router()
const{ authenticate } = require('../helpers/auth')
const {addCat,viewCat,getCategory,replaceCategory,
    newCategoryItem,deleteCategory
    ,getCategoryItems, updateCategory} = require('../controllers/catController')

    const {validateParam,schemas,validateBody} = require('../helpers/routeHelper')

//adds a category 
router.route('/inventory').post(validateBody(schemas.categorySchema),addCat)

//gets all the inventory
router.route('/inventory').get(viewCat)


//gets a specific category
router.route('/:catId').get(validateParam(schemas.idSchema,'catId'),getCategory)

//delets category
router.route('/:catId').get(validateParam(schemas.idSchema,'catId'),deleteCategory)

//updates a category
router.route('/:catId').put(validateParam(schemas.idSchema,'catId'),
 validateBody(schemas.categorySchema),replaceCategory)

//used to update an existing category                        
router.route('/:catId').patch(validateParam(schemas.idSchema,'catId'),
validateBody(schemas.optionalSchema),updateCategory)

//gets items in a specific category
router.route('/:catId/items')
.get(validateParam(schemas.idSchema,'catId'),getCategoryItems)

//add an item to a category
.post(validateParam(schemas.idSchema,'catId'),
validateBody(schemas.itemsSchema),newCategoryItem)


module.exports = router

