exports.seed = async function (knex) {
    await knex.raw("TRUNCATE TABLE initiatives CASCADE");
    await knex.raw("TRUNCATE TABLE uservalues CASCADE");
    await knex.raw("TRUNCATE TABLE values CASCADE");
    await knex.raw("TRUNCATE TABLE users CASCADE");
};
