const { Task } = require('./../models/task.model')

const getTasks = async (req, res) => {
  const userId = req.params.userId
  await Task.find({ _userId: userId }).then(tasks => res.send(tasks))
}
const getOneTask = async (req, res) => {
  const userId = req.params.userId
  const taskId = req.params.taskId
  await Task.findOne({ _id: taskId, _userId: userId }).then(doc => res.send(doc))
}
const createTasks = async (req, res) => {
  const userId = req.params.userId
  const title = req.body.title
  let newTask = new Task({
    title, _userId: userId
  })
  newTask.save().then((listDoc) => {
    res.send(listDoc)
  })
}
const deleteTask = async (req, res) => {
  const userId = req.params.userId
  const taskId = req.params.taskId
  await Task.findOneAndRemove({ _id: taskId, _userId: userId }).then(removed => res.send(removed))
}
const modifyTask = async (req, res) => {
  const taskId = req.params.taskId
  const userId = req.params.userId
  const { title } = req.body
  await Task.findOneAndUpdate({ _id: taskId, _userId: userId }, {
    $set: req.body
  }).then(() => res.send({ message: "Updated Successfully" }))
}
module.exports = { getTasks, createTasks, deleteTask, modifyTask, getOneTask }