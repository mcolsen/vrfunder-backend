
exports.up = function (knex) {
    return (
        knex.schema
            // roles
            .createTable("roles", tbl => {
                tbl.increments();
                tbl.string("name", 128).notNullable().unique();
            })
            // users
            .createTable("users", tbl => {
                tbl.increments();
                tbl.string("username", 128).notNullable().unique().index();
                tbl.string("password", 256).notNullable();
                tbl.integer("role")
                    .unsigned()
                    .notNullable()
                    .references("roles.id")
                    .onDelete("RESTRICT")
                    .onUpdate("CASCADE");
            })

            .createTable("projects", tbl => {
                tbl.increments();
                tbl.string("pname", 128).notNullable().unique().index();
                tbl.string("description", 16384).notNullable();
            })


    );
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists("roles")
        .dropTableIfExists("users")
        .dropTableIfExists("projects")
        .dropTableIfExists("donations");
};
