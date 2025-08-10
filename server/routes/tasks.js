const express = require('express');
const router = express.Router();
const authtoken = require('../middleware/authMiddleWare')
const {getUserTasks, createUserTask} = require('../controllers/tasksController')

router.get('/user/tasks', authtoken, getUserTasks);

router.post('/user/tasks/cp', authtoken, createUserTask);


module.exports = router;