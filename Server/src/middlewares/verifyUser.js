const { JWTHandler } = require('../services/JWTHandler');

const verifyUser = async (req, res, next) => {
	// look for the authorization header containing the jwt
	// and verify it
	if (!req.headers.authorization)
		return res.status(401).send({ message: 'You must first sign in.' });

	console.log(req.headers.authorization);
	const [_, jwt] = req.headers.authorization.split(' ');
	const payload = JWTHandler.verifyjwt(jwt);

	if (!payload) return res.status(401).send('You must first sign in.');

	req.currentUser = payload;

	next();
};

module.exports = { verifyUser };
