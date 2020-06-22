const { app } = require('../app');

// auth routes
const { signUpUserRouter } = require('./auth/signup');
const { signInUserRouter } = require('./auth/signin');
const { signOutUserRouter } = require('./auth/signout');

app.use(signUpUserRouter);
app.use(signInUserRouter);
app.use(signOutUserRouter);

// todos routes
const { newTodoRouter } = require('./todos/create');
const { updateTodoRouter } = require('./todos/update');
const { deleteTodoRouter } = require('./todos/delete');
const { listAllTodoRouter } = require('./todos/list');

app.use(newTodoRouter);
app.use(updateTodoRouter);
app.use(deleteTodoRouter);
app.use(listAllTodoRouter);
