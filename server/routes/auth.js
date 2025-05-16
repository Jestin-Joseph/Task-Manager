const express = require('express');
const router = express.Router();
const {getAllUsers, signUp} = require('../controllers/authController')

router.get('/getAllUsers', getAllUsers)
router.post('/register', signUp)

module.exports = router;