const express       = require('express');
const bodyParser    = require('body-parser');
const models        = require('./models');
const app           = express();

// app config
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// requiring routes
const animals = require('./routes/animals');
const species = require('./routes/species');
const occurences = require('./routes/occurences');
const encounters = require('./routes/encounters');

// using routes
app.use('/animals', animals);
app.use('/species', species);
app.use('/occurences', occurences);
app.use('/encounters', encounters);


app.listen(8080, function() {
  console.log('app listening on port 8080')
});
