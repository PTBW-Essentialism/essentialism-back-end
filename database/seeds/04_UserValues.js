exports.seed = async function (knex) {
    await knex("UserValues").insert([{ userId: 1, valuesId: 2 }]);
};
