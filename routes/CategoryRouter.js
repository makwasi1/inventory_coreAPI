const router = require('express-promise-router')();
const { Category, SpecifyCategory } = require('../controllers/CategoryController')



router.route("/category").get(Category);
router.route("/category/:id").get(SpecifyCategory)


module.exports = router;