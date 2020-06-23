const { PasswordHandler } = require('../services/PasswordHandler');
const { JWTHandler } = require('../services/JWTHandler');
const knex = require('../../knexClient');

class TodoItem {
	constructor({ task, userId }) {
		this.taskId = Date.now().toString();
		this.task = task;
		this.status = 'active';
		this.userId = userId;
	}

	async saveToDatabase() {
		try {
			await knex('todos').insert(this);
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
			id: user.taskId,
			name: user.name,
			email: user.email,
		});

		return token;
	}
}

module.exports = TodoItem;
