const Customer = require('../../models/customer');

module.exports = () => {

	const express = require('express');
	const router = express.Router();

	router.get('/', (req, res) => {
		Customer
		  .query()
		  .then(customers => {
		    console.log('there are', customers.length, 'Customers in total');
		    res.json(customers);
		  })
		  .catch(err => {
		    console.log('Error: ', err);
		    res.status(500).send(err);
		  });
	});

	router.get('/csv', (req, res) => {
		Customer
		  .query()
		  .then(customers => {
		  	converter.json2csv(customers, (err1, data) => {
		  		res.setHeader('Content-disposition', 'attachment; filename=testing.csv');
	  			res.set('Content-Type', 'text/csv');
	  			res.status(200).send(data);
		  	});
		  })
		  .catch(err => {
		    res.status(500).send(JSON.stringify(err));
		  })
	});

	return router;
};