if (process.env.APP_ENV === 'production') {
	module.exports = require('./config.prod');
} else {
	module.exports = require('./config.dev');
}
//switch between dev and production environment