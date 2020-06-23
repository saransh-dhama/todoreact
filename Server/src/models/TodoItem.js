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

	static async fetchTasksByUserId(userId) {
		return await knex('todos').where('userId', userId);
	}

	static async updateTaskithId({ taskId, userId, task, status }) {
		return await knex('todos')
			.where({
				taskId,
				userId,
			})
			.update({ status, task });
	}

	static async fetchTaskById(taskId) {
		const [task] = await knex('todos').where('taskId', taskId);
		return task;
	}

	static async deleteTaskById(taskId) {
		return await knex('todos').where('taskId', taskId).del();
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
