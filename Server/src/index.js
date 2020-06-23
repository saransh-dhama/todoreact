const { app } = require('./app');
const knex = require('../knexClient');

app.listen(3200, () => console.log('Listening on port 3200!'));

// Graceful shutdown
process.on('SIGTERM', () => {
	console.info('SIGTERM signal received.');
	knex.destroy();
});

process.on('SIGINT', () => {
	console.info('SIGINT signal received.');
	knex.destroy();
});
