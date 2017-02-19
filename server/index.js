const express = require('express');
const app = express();

const converter = require('json-2-csv');

const configureDatabase = require('./data/configureDatabase');
configureDatabase();

// set up express
// app.set('view engine','react');
// app.set('views', __dirname + '/public/views');

// app.use(express.static(__dirname + '/public'));

const apiRoutes = require('./routes');
app.use('/api', apiRoutes());

app.listen(3007, () => {
	console.log('server is running');
});
