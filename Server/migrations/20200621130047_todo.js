exports.up = function (knex) {
	return knex.schema.createTable('todos', (table) => {
		table.string('taskId').primary();
		table.string('task').notNullable();
		table.string('status').defaultTo('active');
		table.dateTime('CreatedAt').defaultTo(knex.fn.now());
		table
			.integer('userId')
			.references('userId')
			.inTable('users')
			.notNull()
			.onDelete('cascade');
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable('todos');
};
