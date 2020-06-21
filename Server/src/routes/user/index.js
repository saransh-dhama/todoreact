const { app } = require('../../app');
const { createUserRouter } = require('./create');

app.use(createUserRouter);
