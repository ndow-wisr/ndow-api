const express = require('express');
const router = express.Router();
const models = require('../models');

// INDEX
router.get('/', (req, res) => {
  models.Project.findAll()
    .then(rtn => res.status(200).json(rtn))
    .catch(err => res.status(400).json(err));
});

// CREATE
router.post('/', (req, res) => {
  models.Project.create(req.body)
    .then(rtn => {
      res.status(201).json({
        status: 'add new project to the database',
        self: 'localhost:8000' + '/projects/' + rtn.id,
        data: rtn
      });
    })
    .catch(err => res.status(400).json(err));
});

// SHOW
router.get('/:id', (req, res) => {
  models.Project.findById(req.params.id)
    .then(rtn => res.status(200).json(rtn))
    .catch(err => res.status(400).json(err));
});

// UPDATE
router.get('/:id', (req, res) => {
  models.Project.update(req.body, {
    where: { id: req.params.id }
  })
    .then(rtn => {
      res.status(200).json({
        status: 'udpated project',
        self: 'localhost:8000' + '/projects/' + req.params.id
      });
    })
    .catch(err => res.status(400).json(err));
});

// DELETE
router.delete('/:id', (req, res) => {
  models.Project.destroy({
    where: { id: req.params.id }
  })
    .then(() => res.status(204).json({ status: 'deleted project' }))
    .catch(err => res.status(400).json(err));
});

module.exports = router
