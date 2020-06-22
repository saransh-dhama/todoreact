const jwt = require('jsonwebtoken');

const JWT_SECRET = 'someextremelycomplicatedSecret';

class JWTHandler {
	static generatejwt(payload) {
		return jwt.sign(payload, JWT_SECRET);
	}

	static verifyjwt(token) {
		try {
			const payload = jwt.verify(token, JWT_SECRET);
			return payload;
		} catch (err) {
			console.error(err);
		}
	}
}

exports.JWTHandler = JWTHandler;
