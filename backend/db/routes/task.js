const express = require('express')
const taskController = require('../controllers/task')
const router = express.Router()

router.get('/:userId/tasks', taskController.getTasks)
router.get('/:userId/tasks/:taskId', taskController.getOneTask)
router.post('/:userId/tasks', taskController.createTasks)
router.delete('/:userId/tasks/:taskId', taskController.deleteTask)
router.put('/:userId/tasks/:taskId', taskController.modifyTask)

module.exports = router