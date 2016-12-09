var express     = require('express'),
    router      = express.Router(),
    models      = require('../models');

// TODO: fix these routes to work with new stuff
// INDEX (get) - show all species
router.get('/', (req, res) => {
  // get querystring for SQL where clause
  var q = req.query;

  models.Species.findAll({
    where: q
  })
    .then((species) => {
      res.status(200).json(species);
    });
});

// SHOW (get) - show one species by id
router.get('/:id', (req, res) => {
  models.Species.findById(req.params.id)
    .then((animal) => {
      res.status(200).json(animal);
    });
});

// CREATE (post) - create a new species
router.post('/', (req, res) => {
  models.Species.create(req.body)
    .then((animal) => {
      res.status(200).json(animal);
    });
});

// UPDATE (put/pathc) - update one species
router.put('/:id', (req, res) => {
  models.Species.update(
    req.body,
    { where: {id: req.params.id} }
  )
    .then(upd => {
      res.status(200).json({
        "updated": "updated user",
        "data": upd
      });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// DELETE (destroy) - delete a species by id
router.delete('/:id', (req, res) => {
  models.Species.destroy({
    where: { id: req.params.id }
  })
    .then(dlt => {
      res.status(200).json(dlt);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
