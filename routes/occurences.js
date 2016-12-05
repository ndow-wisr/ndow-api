const express = require('express');
const router = express.Router();
const models = require('../models');

// INDEX (get) - show all wildlife occurences (incidental occurences)
router.get('/', (req, res) => {
  models.Encounter.findAll({
      attributes: ['id', 'enc_date', 'status', 'source', 'comments', 'user_id'],
      include: [{
        model: models.Animal,
        attributes: ['id', 'species_id'],
        include: [{
          model: models.Species,
          attributes: ['id', 'common_name', 'species_name', 'subspecies']
        }]
      }, {
        model: models.Location,
        attributes: ['id', 'loc_name', 'loc_type', 'loc_easting', 'loc_northing', 'loc_lat', 'loc_lon', 'loc_mtn_range', 'loc_hunt_unit']
      }, {
        model: models.Abundance,
        attributes: ['id', 'n_female', 'n_male', 'n_unk_sex', 'n_adult', 'n_young', 'n_unk_age', 'n_total', 'young_age_class']
      }]
    })
    .then(encounters => {
      res.status(200).json(encounters);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// SHOW (get) - show one wildlife occurence (by id)
router.get('/:id', (req, res) => {
  models.Encounter.findById(req.params.id, {
    attributes: ['id', 'enc_date', 'status', 'source', 'comments', 'user_id'],
    include: [{
      model: models.Animal,
      attributes: ['id', 'species_id'],
      include: [{
        model: models.Species,
        attributes: ['id', 'common_name', 'species_name', 'subspecies']
      }]
    }, {
      model: models.Location,
      attributes: ['id', 'loc_name', 'loc_type', 'loc_easting', 'loc_northing', 'loc_lat', 'loc_lon', 'loc_mtn_range', 'loc_hunt_unit']
    }, {
      model: models.Abundance,
      attributes: ['id', 'n_female', 'n_male', 'n_unk_sex', 'n_adult', 'n_young', 'n_unk_age', 'n_total', 'young_age_class']
      }]
    })
    .then(encounter => {
      res.status(200).json(encounter);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// CREATE (post) - create a new wildlife occurence
router.post('/', (req, res) => {
  models.Encounter.create(req.body, {
    include: [{
      model: models.Animal
    }, {
      model: models.Location
    }, {
      model: models.Abundance
    }]
  })
    .then(encounter => {
      res.status(200).json({
        "status": "new occurence created",
        "data": "localhost:8080" + "/occurences/" + encounter.id
      });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// TODO: patch route will be implemented independently with each resource, more fine grain control
// TODO: delete route will require some work, perhaps database rework for the cascading deletes to work

module.exports = router;
