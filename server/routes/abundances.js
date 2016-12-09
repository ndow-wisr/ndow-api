const express = require('express');
const router = express.Router();
const models = require('../models');

router.get('/', (req, res) => {
  models.Abundance.findAll()
    .then(rtn => res.status(200).json(rtn))
    .catch(err => res.status(400).json(err));
});

// CREATE
router.post('/', (req, res) => {
  models.Abundance.create(req.body)
    .then(rtn => res.status(201).json({
      status: 'added abundances to the database',
      self: 'localhost:8000' + '/abundances/' + rtn.id,
      data: rtn
    }))
    .catch(err => res.status(400).json(err));
});

// SHOW
router.get('/:id', (req, res) => {
  models.Abundance.findById(req.params.id)
    .then(rtn => res.status(200).json(rtn))
    .catch(err => res.status(400).json(err));
});

// UPDATE
router.put('/:id', (req, res) => {
  models.Abundance.update({
    where: { id: req.params.id }
  })
    .then(rtn => res.status(200).json({
      status: 'updated abundances',
      self: 'localhost:8000' + '/abundances/' + req.params.id
    }))
    .catch(err => res.status(200).json(err));
});

router.delete('/:id', (req, res) => {
  models.Abundance.destroy({
    where: { id: req.params.id }
  })
    .then(() => res.status(200).json({ status: 'deleted abundances from database' }))
    .catch(err => res.status(400).json(err));
});

module.exports = router;
