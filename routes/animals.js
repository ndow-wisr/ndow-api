var express     = require('express'),
    router      = express.Router(),
    models      = require('../models');


// INDEX (get) - show all animals
router.get('/', (req, res) => {
  models.Animal.findAll({
    include: [{
      model: models.Species,
      attributes: ['id', 'species_name', 'subspecies', 'common_name']
    }, {
      model: models.Mark
    }, {
      model: models.Encounter,
      attributes: ['id', 'age', 'status', 'source', 'enc_date', 'comments'],
      include: [{
        model: models.Location,
        attributes: ['id', 'loc_name', 'loc_lat', 'loc_lon'] // TODO: once mountain range and hunt unit data is incorporated include those data here.
      }, {
        model: models.Project,
        attributes: ['id', 'proj_name']
      }]
    }]
  })
    .then(animals => {
      res.status(200).json(animals);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// SHOW (get) - show one animal
router.get('/:id', (req, res) => {
  models.Animal.findById(req.params.id, {
    include: [{
      model: models.Species
    }, {
      model: models.Mark
    }, {
      model: models.Encounter,
      attributes: {exclude: 'location_id'}
    }]
  })
  .then(animal => {
    res.status(200).json(animal);
  });
});

// CREATE (post) - create a new animal
router.post('/', (req, res) => {
  models.Animal.create(req.body)
    .then(animal => {
      res.status(200).json(animal);
    })
    .catch(err => {
      res.status(500).json(err);
    })
});

module.exports = router;
