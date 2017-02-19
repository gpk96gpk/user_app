module.exports = () => {

	const express = require('express');
	const router = express.Router();

	router.get('/', (req, res) => {
		res.json({ app: 'MyApp', version: 1 });
	});

	const customers = require('./api/customers');
	const products = require('./api/products');

	router.use('/customers', customers());
	router.use('/products', products());
	return router;
}