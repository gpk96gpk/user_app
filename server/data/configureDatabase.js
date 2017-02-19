/**
 * configureDatabase.js
 * Creates and initializes the database connection
 */

// contains the connection string that knex uses to connect to postgres
const config = require('../config');

const Knex = require('knex');

// a global objection Model object
// this needs to be configured in order for Objection to work
const Model = require('objection').Model;

module.exports = function() {
	
	// configure knex
	const knex = Knex(config);

	// bind configured knex to objection model
	Model.knex(knex);
}