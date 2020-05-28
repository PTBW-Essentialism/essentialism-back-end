exports.seed = async function (knex) {
    if (process.env.NODE_ENV != "production") {
        await knex("UserValues").truncate();
        await knex("Initiatives").truncate();
        await knex("Values").truncate();
        await knex("Users").truncate();
    }
};
