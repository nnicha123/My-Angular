const express = require('express')
const taskController = require('../controllers/task')
const router = express.Router()

router.get('/:userId/tasks', taskController.getTasks)
router.post('/:userId/tasks', taskController.createTasks)

module.exports = router