const express = require('express');
const { json } = require('body-parser');
const cors = require('cors');

const app = express();

app.all('*', (req, res) => {
	res.send('Hello, there!');
});

module.exports = { app };
