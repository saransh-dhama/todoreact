const { app } = require('./app');
const knex = require('../knexClient');

knex.migrate
	.latest()
	.then(function () {
		app.listen(3200, () => console.log('Listening on port 3200!'));
	})
	.catch(function () {
		console.error('DB migrations could not be set.');
		process.exit();
	});

// Graceful shutdown
process.on('SIGTERM', () => {
	console.info('SIGTERM signal received.');
	knex.destroy();
});

process.on('SIGINT', () => {
	console.info('SIGINT signal received.');
	knex.destroy();
});
