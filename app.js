var express       = require('express'),
    bodyParser    = require('body-parser'),
    models        = require('./models'),
    app           = express();

// app config
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// requiring routes
var animals = require('./routes/animals');
var species = require('./routes/species');

// using routes
app.use('/animals', animals);
app.use('/species', species);

app.listen(8080, function() {
  console.log('app listening on port 8080')
});
