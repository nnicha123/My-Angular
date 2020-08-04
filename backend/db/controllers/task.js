const { Task } = require('./../models/task.model')

const getTasks = async (req, res) => {
  const userId = req.params.userId
  await Task.find({ _userId: userId }).then(tasks => res.send(tasks))
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
module.exports = { getTasks, createTasks }