const express = require('express');
const router = express.Router();
const models = require('../models');

// INDEX (get) - list all encounters
router.get('/', (req, res) => {
  models.Encounter.findAll({
    attributes: {exclude: 'location_id'},
    include: [{
      model: models.Animal,
      include: [{
        model: models.Species,
        attributes: ['common_name', 'species_name', 'subspecies']
      }]
    }, {
      model: models.Location
    }, {
      model: models.Project
    }]
  })
    .then(payload => {
      res.status(200).json(payload);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get('/:id', (req, res) => {
  models.Encounter.findById(req.params.id, {
    attributes: { exclude: 'location_id'},
    include: [{
      model: models.Animal,
      include: [{
        model: models.Species,
        attributes: ['common_name', 'species_name', 'subspecies']
      }]
    }, {
      model: models.Location
    }, {
      model: models.Project
    }]
  })
    .then(payload => {
      res.status(200).json(payload);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post('/', (req, res) => {
  models.Encounter.create(req.body, {
    include: [{
      model: models.Animal
    }, {
      model: models.Location
    }]
  })
    .then(rtn => {
      res.status(201).json(rtn);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
