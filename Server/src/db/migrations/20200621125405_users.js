exports.up = function (knex) {
	return knex.schema.createTable('Users', (table) => {
		table.increments('userId').primary();
		table.string('name').notNullable();
		table.string('email').notNullable();
		table.string('password').notNullable();
		table.integer('age').notNullable();
		table.dateTime('createdAt').defaultTo(knex.fn.now());
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable('Users');
};
