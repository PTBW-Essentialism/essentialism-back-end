exports.up = async function (knex) {
    await knex.schema.createTable("users", (table) => {
        table.increments("id");
        table.text("username").unique().notNullable();
        table.text("password").notNullable();
        table.text("email").notNullable().unique();
        table.text("firstName").notNullable();
        table.text("lastName").notNullable();
    });
    await knex.schema.createTable("values", (table) => {
        table.increments("id");
        table.text("name").notNullable();
        table.text("description").notNullable();
    });
    await knex.schema.createTable("uservalues", (table) => {
        table.increments("id");
        table
            .integer("userId")
            .references("id")
            .inTable("users")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
        table
            .integer("valuesId")
            .references("id")
            .inTable("values")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
    });

    await knex.schema.createTable("initiatives", (table) => {
        table.increments("id");
        table.text("iName").notNullable();
        table.text("iDescription");
        table.text("dueDate");
        table
            .integer("userId")
            .references("id")
            .inTable("users")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
        table
            .integer("userValuesId")
            .references("id")
            .inTable("uservalues")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
        table.boolean("completed").defaultTo(false);
        table.boolean("repeatable").defaultTo(false);
    });
};

exports.down = async function (knex) {
    await knex.schema.dropTableIfExists("initiatives");
    await knex.schema.dropTableIfExists("uservalues");
    await knex.schema.dropTableIfExists("users");
    await knex.schema.dropTableIfExists("values");
};
