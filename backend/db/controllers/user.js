const { User } = require('../models/user.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const getUsers = async (req, res) => {
  await User.find().then(users => res.send(users))
}
const register = async (req, res) => {
  const { username, password, name } = req.body
  const invalidUser = await User.findOne({ username: username })
  if (invalidUser) {
    res.status(400).send({ message: 'username already taken' })
  }
  else {
    const salt = bcrypt.genSaltSync(10)
    const hashedPassword = bcrypt.hashSync(password, salt)
    let newUser = new User({
      username, password: hashedPassword, name
    })
    newUser.save().then((listDoc) => {
      res.send(listDoc)
    })
    res.status(201).send({ message: 'Successfully created!' })
  }
}
const login = async (req, res) => {
  const { username, password } = req.body
  const foundUser = await User.findOne({ username })
  if (!foundUser) {
    res.status(400).send("Incorrect username or password")
  } else {
    const correctPassword = bcrypt.compareSync(password, foundUser.password)
    if (correctPassword) {
      const payload = {
        name: foundUser.name,
        id: foundUser._id
      }
      const token = jwt.sign(payload, "pook", { expiresIn: 3600 })
      res.status(200).send({
        message: 'Successfully logged in',
        token,
        id: foundUser._id,
        name: foundUser.name
      })
    } else {
      res.status(400).send("Incorrect username or password")
    }
  }
}
module.exports = { getUsers, register, login }



