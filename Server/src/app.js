const express = require('express');
const { json } = require('body-parser');
const cors = require('cors');
const cookieSession = require('cookie-session');

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(
	cookieSession({
		signed: false,
		secure: false,
	})
);

app.use(json());
app.use(cors());

app.all('/', (req, res) => {
	res.send('Hello, there!');
});

module.exports = { app };

require('./routes/auth');
