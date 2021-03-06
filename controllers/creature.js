const express = require('express');
const Creature = require('../models/creature.js');

const creatureRouter = express.Router();

// Get all
creatureRouter.get('/', (req, res) => {
  Creature.find().then((creatures) => {
    res.json(creatures);
  });
});

// Get one
creatureRouter.get('/:creatureId', (req, res) => {
  Creature.findById(req.params.creatureId).then((creature) => {
    res.json(creature);
  });
});

// Create one
creatureRouter.post('/', (req, res) => {
  Creature.create(req.body).then(() => {
    res.json('ok');
    res.status(200).end();
  });
});

// Update one
creatureRouter.put('/:creatureId', (req, res) => {
  Creature.findByIdAndUpdate(req.params.creatureId, req.body).then((creature) => {
    res.json(creature);
    res.status(200).end();
  });
});

// Delete one
creatureRouter.delete('/:creatureId', (req, res) => {
  Creature.findByIdAndRemove(req.params.creatureId).then((creature) => {
    res.json(creature);
    res.status(200).end();
  });
});

module.exports = {creatureRouter};
