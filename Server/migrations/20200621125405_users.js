exports.up = function (knex) {
	return knex.schema.createTable('users', (table) => {
		table.string('userId').primary();
		table.string('name').notNullable();
		table.string('email').notNullable();
		table.string('password').notNullable();
		table.boolean('is18OrOlder').notNullable();
		table.dateTime('createdAt').defaultTo(knex.fn.now());
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable('users');
};
