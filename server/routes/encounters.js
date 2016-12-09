const express = require('express');
const router = express.Router();
const models = require('../models');

// INDEX (get) - list all encounters
router.get('/', (req, res) => {
  models.Encounter.findAll()
    .then(rtn => res.status(200).json(rtn))
    .catch(err => res.status(400).json(err));
});

// SHOW
router.get('/:id', (req, res) => {
  models.Encounter.findById(req.params.id)
    .then(rtn => res.status(200).json(payload))
    .catch(err => res.status(400).json(err));
});

// CREATE (post) - create a new encounter, include Animal and Location.
router.post('/', (req, res) => {
  models.Encounter.create(req.body)
    .then(rtn => {
      res.status(201).json({
        status: 'added animal to the database',
        self: 'localhost:8000' + '/encounters/' + encounter.id,
        data: rtn
      });
    })
    .catch(err => res.status(400).json(err));
});

// UPDATE (put) - edit encounter data, only encounter, not Animal or Location
router.put('/:id', (req, res) => {
  models.Encounter.update(req.body, {
    where: { id: req.params.id }
  })
    .then(rtn => {
      res.status(200).json({
        status: 'updated encounter',
        self:'localhost:8080' + '/encounters/' + req.params.id,
        data: rtn
      });
    })
    .catch(err => res.status(400).json(err));
});

// DELETE (destroy) - delete an encounter, only the encounter however, Still need to work on cascading updates.
router.delete('/:id', (req, res) => {
  models.Encounter.destroy({
    where: {id: req.params.id}
  })
    .then(rtn => res.status(200).json({ status: 'deleted encounter'}))
    .catch(err => res.status(400).json(err))
});

module.exports = router;
