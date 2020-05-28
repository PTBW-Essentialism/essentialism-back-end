exports.seed = async function (knex) {
    await knex("UserValues").truncate();
    await knex("Initiatives").truncate();
    await knex("Values").truncate();
    await knex("Users").truncate();
};
