const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const animals = require('./server/routes/animals');
const encounters = require('./server/routes/encounters');
const projects = require('./server/routes/projects');
const locations = require('./server/routes/locations');
const users = require('./server/routes/users');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// require('./server/routes/index')(app);

app.use('/animals', animals);
app.use('/encounters', encounters);
app.use('/projects', projects);
app.use('/locations', locations);
app.use('/users', users);

app.get('*', (req, res) => {
  res.status(200).json({
    message: 'Nothing here'
  });
});

module.exports = app;
