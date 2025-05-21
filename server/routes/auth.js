const express = require('express');
const router = express.Router();
const { getAllUsers, signUp, signIn, } = require('../controllers/authController')

router.get('/getAllUsers', getAllUsers)
router.post('/register', signUp)
router.post('/login', signIn)
module.exports = router;