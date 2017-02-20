const Product = require('../../models/products');
const _ = require('lodash');
const express = require('express');
const router = express.Router();
module.exports = () => {

	router.get('/', (req, res) => {
		Product
		  .query()
		  .join('storage as s', 'products.serial_number', 's.serial_number')
		  .select('name','price','s.production_price')
		  


		  .then(products => {
		    console.log('there are', products.length, 'Products in total');
		    res.json(products);
		  })
		  .catch(err => {
		    console.log('Error: ', err);
		    res.status(500).send(err);
		  });
	});

	router.get('/differences', (req, res) => {
		// Product
		// 	.query()
		// 	//.select('Product.*', '(Product.price - s.production_price) as difference')
		// 	.join('Storage as s', 'Product.serial_number', 's.serial_number')
		// 	//.orderBy('difference', 'desc')
		// 	.then(products => {
		// 		res.json(products);
		// 	})
		// 	.catch(err => {
		// 		res.status(500).send(err);
		// 	});
		Product
			.query()

			//.select('product.*', 's.serial_number, s.production_price')
			//.select('products.*', '(products.price - s.production_price) as difference')
			.join('storage as s', 'products.serial_number', 's.serial_number')
			//.orderBy('difference', 'desc')
			.then(products => {
				products.map(x => {
					delete x.color;
					delete x.size;
					delete x.country;
					
					x.difference = x.price - x.production_price;
					return x;
				})
			// const sorted = _.orderBy(withDifferences, ['difference'], 'desc');
			products.sort((a, b) => {
				return a.difference - b.difference;
			});
			res.json(products);
			
			})
			.catch(err => {
				console.log(err);
			});
	});

	return router;
};
