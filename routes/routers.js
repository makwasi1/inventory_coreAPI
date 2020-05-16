const express = require('express');
const {Signup, logIn} = require('../controllers/UserController');

const router = express.Router()

router.route("/signup").post(Signup);
router.route("/login").post(logIn);


module.exports = router;