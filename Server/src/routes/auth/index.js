const { app } = require('../../app');
const { createUserRouter } = require('./signup');
const { signInUserRouter } = require('./signin');

app.use(createUserRouter);
app.use(signInUserRouter);
