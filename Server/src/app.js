const express = require('express');
const { json } = require('body-parser');
const cors = require('cors');

const app = express();

app.use(json());
app.use(cors());

app.all('/', (req, res) => {
	res.send('Hello, there!');
});

module.exports = { app };

require('./routes/user');
