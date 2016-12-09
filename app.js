const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./server/routes/animals');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// require('./server/routes/index')(app);

app.use('/animals', routes);

app.get('*', (req, res) => {
  res.status(200).json({
    message: 'Nothing here'
  });
});

module.exports = app;
