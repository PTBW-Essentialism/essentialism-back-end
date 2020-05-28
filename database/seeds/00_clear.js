exports.seed = async function (knex) {
    await knex("Initiatives").truncate();
    await knex("Values").truncate();
    await knex("Users").truncate();
    await knex("UserValues").truncate();
};
