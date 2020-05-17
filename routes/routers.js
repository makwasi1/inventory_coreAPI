const router = require('express-promise-router')();
const {Signup, logIn} = require('../controllers/UserController');

router.route("api/v1/auth/signup").post(Signup);
router.route("api/v1/auth/login").post(logIn);


module.exports = router;