const { PasswordHandler } = require('../services/PasswordHandler');
const { JWTHandler } = require('../services/JWTHandler');
const knex = require('../../knexClient');

class User {
	constructor({ name, email, password, is18OrOlder }) {
		this.userId = Date.now().toString();
		this.name = name;
		this.email = email;
		this.password = password;
		this.is18OrOlder = is18OrOlder;
	}

	async saveToDatabase() {
		try {
			await knex('users').insert(this);
		} catch (err) {
			throw err;
		}
	}

	static async build({ name, email, password, is18OrOlder }) {
		const hashedPassword = await PasswordHandler.toHash(password);
		return new User({ name, email, password: hashedPassword, is18OrOlder });
	}

	static generateUserToken(user) {
		const token = JWTHandler.generatejwt({
			id: user.userId,
			name: user.name,
			email: user.email,
		});

		return token;
	}
}

module.exports = User;
