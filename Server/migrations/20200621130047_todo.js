exports.up = function (knex) {
	return knex.schema.createTable('todos', (table) => {
		table.string('taskId').primary().defaultTo(Date.now().toString());
		table.string('task').notNullable();
		table.string('status').defaultTo('active');
		table.dateTime('CreatedAt').defaultTo(knex.fn.now());
		table
			.string('userId')
			.references('userId')
			.inTable('users')
			.notNull()
			.onDelete('cascade');
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable('todos');
};
