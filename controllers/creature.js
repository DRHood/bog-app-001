const express = require('express');
const Creature = require('../models/creature.js');

const creatureRouter = express.Router();

creatureRouter.get('/', (req, res) => {
  Creature.find().then((creatures) => {
    res.json();
  });
});

creatureRouter.get('/:id', (req, res) =>{
  Creature.findById(req.params.id).then(() => {
    res.json();
  });
});

module.exports = {creatureRouter};
