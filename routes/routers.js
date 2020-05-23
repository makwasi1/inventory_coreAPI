const router = require('express-promise-router')();
const {Signup, logIn} = require('../controllers/UserController');

router.route("/signup").post(Signup);
router.route("/login").post(logIn);


module.exports = router;