const express = require('express');
const router = express.Router();
const models = require('../models');

// INDEX
router.get('/', (req, res) => {
  models.Location.findAll()
    .then(rtn => res.status(200).json(rtn))
    .catch(err => res.status(400).json(err));
});

// CREATE
router.post('/', (req, res) => {
  models.Location.create(req.body)
    .then(rtn => res.status(201).json({
      status: 'add new location to database',
      self: 'localhost:8000' + '/locations/' + location.id,
      data: rtn
    }))
    .catch(err => res.status(400).json(err));
});

// SHOW
router.get('/:id', (req, res) => {
  models.Location.findById(req.params.id)
    .then(rtn => res.status(200).json(rtn))
    .catch(err => res.status(400).json(err));
});

// UPDATE
router.put('/:id', (req, res) => {
  models.Location.update(req.body, {
    where: { id: req.params.id }
  })
    .then(rtn => res.status(200).json({
      status: 'updated location',
      sself: 'localhost:8000' + '/locations/' + req.params.id
    }))
    .catch(err => res.status(400).json(err));
});

// DELETE
router.delete('/:id', (req, res) => {
  models.Location.destroy({
    where: { id: req.params.id }
  })
    .then(() => res.status(204).json({ status: 'deleted locations from databasel'}))
    .catch(err => res.status(400).json(err));
});

module.exports = router;
