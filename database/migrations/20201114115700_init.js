exports.up = function (knex) {
	return (
		knex.schema
			// roles
			.createTable("roles", (tbl) => {
				tbl.increments();
				tbl.string("name", 128).notNullable().unique();
			})
			// users
			.createTable("users", (tbl) => {
				tbl.increments();
				tbl.string("username", 128).notNullable().unique().index();
				tbl.string("password", 256).notNullable();
				tbl
					.integer("role")
					.unsigned()
					.notNullable()
					.references("roles.id")
					.onDelete("RESTRICT")
					.onUpdate("CASCADE");
			})

			.createTable("projects", (tbl) => {
				tbl.increments();
				tbl.string("pname", 128).notNullable().unique().index();
				tbl.string("description", 16384);
				tbl.string("location");
				tbl.integer("goal").unsigned().notNullable();
				tbl.integer("progress").unsigned();
				tbl.string("image_url");
				tbl.string("external_url");
				tbl.string("fundraiser").notNullable();
			})
	);
};

exports.down = function (knex) {
	return knex.schema
		.dropTableIfExists("roles")
		.dropTableIfExists("users")
		.dropTableIfExists("projects");
};
