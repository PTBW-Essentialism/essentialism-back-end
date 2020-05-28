exports.up = async function (knex) {
    await knex.schema.createTable("Users", (table) => {
        table.increments("id");
        table.text("username").unique().notNullable();
        table.text("password").notNullable();
        table.text("email").notNullable().unique();
        table.text("firstName").notNullable();
        table.text("lastName").notNullable();
    });
    await knex.schema.createTable("Values", (table) => {
        table.increments("id");
        table.text("name").notNullable();
        table.text("description").notNullable();
    });
    await knex.schema.createTable("UserValues", (table) => {
        table.increments("id");
        table
            .integer("userId")
            .references("id")
            .inTable("Users")
            .onDelete("cascade");
        table
            .integer("valuesId")
            .references("id")
            .inTable("Values")
            .onDelete("cascade");
    });

    await knex.schema.createTable("Initiatives", (table) => {
        table.increments("id");
        table.text("iName").notNullable();
        table.text("iDescription");
        table.text("dueDate");
        table
            .integer("userId")
            .references("id")
            .inTable("Users")
            .onDelete("cascase");
        table
            .integer("userValuesId")
            .references("id")
            .inTable("UserValues")
            .onDelete("cascade");
        table.boolean("completed").defaultTo(false);
        table.boolean("repeatable").defaultTo(false);
    });
};

exports.down = async function (knex) {
    await knex.schema.dropTableIfExists("Initiatives");
    await knex.schema.dropTableIfExists("Values");
    await knex.schema.dropTableIfExists("Users");
    await knex.schema.dropTableIfExists("UserValues");
};
