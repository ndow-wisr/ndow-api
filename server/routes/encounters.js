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

// CREATE (post) - create a new encounter, include Animal and Location.
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
    .catch(err => {
      res.status(400).json(err);
    });
});

// DELETE (destroy) - delete an encounter, only the encounter however, Still need to work on cascading updates.
router.delete('/:id', (req, res) => {
  models.Encounter.destroy({
    where: {id: req.params.id}
  })
    .then(rtn => {
      res.status(200).json(rtn);
    })
    .catch(err => {
      res.status(400).json(err);
    })
});

module.exports = router;
