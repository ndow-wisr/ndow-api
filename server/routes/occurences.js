const express = require('express');
const router = express.Router();
const models = require('../models');

/*
INCIDENTAL WILDLIFE OCCCURRENCES

DEFINITION: an incidental wildlife occurrence is any wildlife occurrence that happens incidentally. I like to think of these is opportunistic data points that are collected as often as possible, but aren't required as a job duty.

SCHEMA: an incidental wildlife occurrence includes Animal, Encounter, Location and Abundance resources explicitly. Species and User resources are referenced.

DATA: a javascript/json object
{
  enc_date: date only yyyy-mm-dd format required,
  status: string,
  source_app: string required,
  comments: text,
  project_id: integer required,
  user_id: integer required,
  ... other encounter data not used for occurrences ...
  Animal: {
    species_id: integer required
  },
  Location: {
    loc_name: string,
    loc_lat: real required,
    loc_lon: real required
  },
  Abundances: {
    n_female: integer,
    n_males: integer,
    n_unk_sex: integer,
    n_adults: integer,
    n_young: integer,
    n_unk_age: integer,
    young_age_class: string
  }
}
*/

// INDEX (get) - show all wildlife occurences (incidental occurences)
router.get('/', (req, res) => {
  models.Encounter.findAll({
    order: [['enc_date', 'DESC']],
    where: {project_id: 2},
    include: [{
      model: models.Location
    }, {
      model: models.Abundance
    }, {
      model: models.Animal,
      include: [{
        model: models.Species
      }]
    }]
  })
  .then(rtn => res.status(200).json(rtn))
  .catch(err => res.status(400).json(err));
});

// CREATE
router.post('/', (req, res) => {
  console.log(JSON.stringify(req.body, null, '\t'));
  models.Encounter.create(req.body, {
    include: [{
      model: models.Location
    }, {
      model: models.Abundance
    }, {
      model: models.Animal
    }]
  })
  .then(rtn => {
    res.status(201).json({
      status: 'added incidental occurence to database',
      self: 'localhost:8000' + '/Occurrences/' + rtn.id,
      data: rtn
    });
  })
  .catch(err => res.status(400).json(err));
});

// SHOW
router.get('/:id', (req, res) => {
  models.Encounter.findById(req.params.id)
  .then(rtn => res.status(200).json(rtn))
  .catch(err => res.status(400).json(err));
});


// // INDEX (get) - show all wildlife occurences (incidental occurences)
// router.get('/', (req, res) => {
//   models.Encounter.findAll({
//     // TODO: how should I parse the querystring to put the proper variables in the proper model?
//       // where: {source: 'incidental occurence'},
//       order: [['enc_date', 'DESC']],
//       attributes: ['id', 'enc_date', 'status', 'source', 'comments', 'user_id'],
//       include: [{
//         model: models.Animal,
//         attributes: ['id', 'species_id'],
//         include: [{
//           model: models.Species,
//           attributes: ['id', 'common_name', 'species_name', 'subspecies']
//         }]
//       }, {
//         model: models.Location,
//         attributes: ['id', 'loc_name', 'loc_type', 'loc_easting', 'loc_northing', 'loc_lat', 'loc_lon', 'loc_mtn_range', 'loc_hunt_unit']
//       }, {
//         model: models.Abundance,
//         attributes: ['id', 'n_female', 'n_male', 'n_unk_sex', 'n_adult', 'n_young', 'n_unk_age', 'n_total', 'young_age_class']
//       }]
//     })
//     .then(encounters => {
//       res.status(200).json(encounters);
//     })
//     .catch(err => {
//       res.status(500).json(err);
//     });
// });
//
// // SHOW (get) - show one wildlife occurence (by id)
// router.get('/:id', (req, res) => {
//   models.Encounter.findById(req.params.id, {
//     attributes: ['id', 'enc_date', 'status', 'source', 'comments', 'user_id'],
//     include: [{
//       model: models.Animal,
//       attributes: ['id', 'species_id'],
//       include: [{
//         model: models.Species,
//         attributes: ['id', 'common_name', 'species_name', 'subspecies']
//       }]
//     }, {
//       model: models.Location,
//       attributes: ['id', 'loc_name', 'loc_type', 'loc_easting', 'loc_northing', 'loc_lat', 'loc_lon', 'loc_mtn_range', 'loc_hunt_unit']
//     }, {
//       model: models.Abundance,
//       attributes: ['id', 'n_female', 'n_male', 'n_unk_sex', 'n_adult', 'n_young', 'n_unk_age', 'n_total', 'young_age_class']
//       }]
//     })
//     .then(encounter => {
//       res.status(200).json(encounter);
//     })
//     .catch(err => {
//       res.status(500).json(err);
//     });
// });
//
// // CREATE (post) - create a new wildlife occurence
// router.post('/', (req, res) => {
//   models.Encounter.create(req.body, {
//     include: [{
//       model: models.Animal
//     }, {
//       model: models.Location
//     }, {
//       model: models.Abundance
//     }]
//   })
//     .then(encounter => {
//       res.status(200).json({
//         "status": "new occurence created",
//         "data": "localhost:8080" + "/occurences/" + encounter.id
//       });
//     })
//     .catch(err => {
//       res.status(500).json(err);
//     });
// });

// TODO: patch route will be implemented independently with each resource, more fine grain control
// TODO: delete route will require some work, perhaps database rework for the cascading deletes to work

module.exports = router;
