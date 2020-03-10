const express = require('express')
const creatures = require('../models/creature.js')

const creatureRouter = express.Router()

creatureRouter.get('/', (req, res) => {
  res.json('hello world')
})


module.exports = {creatureRouter}
