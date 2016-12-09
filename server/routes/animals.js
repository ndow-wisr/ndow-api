const express = require('express');
const router = express.Router();
const models = require('../models');

// INDEX (get) - show all animals
router.get('/', (req, res) => {
  models.Animal.findAll()
    .then(rtn => res.status(200).json(rtn))
    .catch(rtn => res.status(400).json(err));
});

// CREATE (post) - create a new animal
router.post('/', (req, res) => {
  models.Animal.create(req.body)
    .then(animal => {
      res.status(201).json({
        status: 'added animal to database',
        data: 'localhost:8080' + '/animals/' + animal.id
      });
    })
    .catch(err => {
      res.status(400).json(err);
    })
});


// // INDEX (get) - show all animals
// router.get('/', (req, res) => {
//   models.Animal.findAll({
//     include: [{
//       model: models.Species,
//       attributes: ['id', 'species_name', 'subspecies', 'common_name']
//     }, {
//       model: models.Mark
//     }, {
//       model: models.Encounter,
//       attributes: ['id', 'age', 'status', 'source', 'enc_date', 'comments'],
//       include: [{
//         model: models.Location,
//         attributes: ['id', 'loc_name', 'loc_lat', 'loc_lon'] // TODO: once mountain range and hunt unit data is incorporated include those data here.
//       }, {
//         model: models.Project,
//         attributes: ['id', 'proj_name', 'proj_desc']
//       }]
//     }]
//   })
//     .then(animals => {
//       res.status(200).json(animals);
//     })
//     .catch(err => {
//       res.status(500).json(err);
//     });
// });
//
// // SHOW (get) - show one animal
// router.get('/:id', (req, res) => {
//   models.Animal.findById(req.params.id, {
//     include: [{
//       model: models.Species,
//       attributes: ['id', 'species_name', 'subspecies', 'common_name']
//     }, {
//       model: models.Mark
//     }, {
//       model: models.Encounter,
//       attributes: ['id', 'age', 'status', 'source', 'enc_date', 'comments'],
//       include: [{
//         model: models.Location,
//         attributes: ['id', 'loc_name', 'loc_lat', 'loc_lon'] // TODO: once mountain range and hunt unit data is incorporated include those data here.
//       }, {
//         model: models.Project,
//         attributes: ['id', 'proj_name', 'proj_desc']
//       }]
//     }]
//   })
//     .then(animal => {
//       res.status(200).json(animal);
//     })
//     .catch(err => {
//       res.status(500).json(err);
//     });
// });
//
// // CREATE (post) - create a new animal
// router.post('/', (req, res) => {
//   models.Animal.create(req.body)
//     .then(animal => {
//       res.status(201).json({
//         status: 'added animal to database',
//         data: 'localhost:8080' + '/animals/' + animal.id
//       });
//     })
//     .catch(err => {
//       res.status(500).json(err);
//     })
// });
//
// // UPDATE (patch/put) - edit an existing animal
// router.put('/:id', (req, res) => {
//   models.Animal.update(req.body, {
//     where: { id: req.params.id },
//     returning: true
//   })
//     .then(animal => {
//       res.status(202).json(animal);
//     })
//     .catch(err => {
//       res.status(500).json(err);
//     });
// });
//
// // DELETE (destroy) - delete an existing animal
// router.delete('/:id', (req, res) => {
//   models.Animal.destroy({
//     where: { id: req.params.id }
//   })
//     .then(animal => {
//       res.status(200).json({
//         status: 'deleted animal from database'
//       });
//     })
//     .catch(err => {
//       res.status(500).json(err);
//     });
// });

module.exports = router;
