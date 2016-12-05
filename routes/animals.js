var express     = require('express'),
    router      = express.Router(),
    models      = require('../models');


// INDEX (get) - show all animals
router.get('/', function(req, res) {
  models.Animal.findAll({
    include: [{
      model: models.Species,
      attributes: ['id', 'species_name', 'subspecies', 'common_name']
    }, {
      model: models.Mark
    }, {
      model: models.Encounter,
      attributes: ['id', 'age', 'status', 'source', 'enc_date', 'comments', 'project_id'],
      include: [{ model: models.Location }]
    }]
  })
  .then(function(animals) {
    res.status(200).json(animals);
  });
});

// SHOW (get) - show one animal
router.get('/:id', function(req, res) {
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
  .then(function(animal) {
    res.status(200).json(animal);
  });
});

module.exports = router;
