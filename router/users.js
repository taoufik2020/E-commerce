const express = require('express');
const router = express.Router();
const { getUser, singin } = require('../Controllers/userController')
const { userSignValidator} = require('../middlware/userValidator')
const User = require('../models/user')

router.get('/',getUser);
router.post('/sing',userSignValidator,singin)


module.exports = router
