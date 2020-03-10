const express = require('express');
const Creature = require('../models/creature.js');

const creatureRouter = express.Router();

// Get all
creatureRouter.get('/', (req, res) => {
  Creature.find().then((creatures) => {
    res.json();
  });
});

// Get one
creatureRouter.get('/:creatureId', (req, res) => {
  Creature.findById(req.params.id).then(() => {
    res.json();
  });
});

// Create one
creatureRouter.post('/', (req, res) => {
  Creature.create(req.body).then(() => {
    res.json();
  });
});

module.exports = {creatureRouter};
