const express = require('express');
const router = express.Router();

const userController = require('../controller/user');

router.post('/register',userController.postuserController);

router.post('/login',userController.loginuserController);

module.exports = router;
