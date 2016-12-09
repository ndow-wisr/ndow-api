const express = require('express');
const router = express.Router();
const models = require('../models');

// INDEX
router.get('/', (req, res) => {
  models.User.findAll()
  .then(rtn => res.status(200).json(rtn))
  .catch(err => res.status(400).json(err));
})

// CREATE
router.post('/', (req, res) => {
  models.User.create(req.body)
    .then(rtn => {
      res.status(201).json({
        status: 'added user to database',
        self: 'localhost:8000' + '/users/' + user.id,
        data: rtn
      });
    })
    .catch(err => res.status(400).json(err));
});

// SHOW
router.get('/:id', (req, res) => {
  models.User.findById(req.params.id)
    .then(rtn => res.status(200).json(rtn))
    .catch(err => res.status(400).json(err));
});

// UPDATE

// DELETE

module.exports = router
