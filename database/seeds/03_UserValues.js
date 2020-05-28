exports.seed = async function (knex) {
    await knex("uservalues").insert([
        { userId: 1, valuesId: 1 },
        { userId: 1, valuesId: 2 },
        { userId: 1, valuesId: 3 },
        { userId: 2, valuesId: 1 },
        { userId: 2, valuesId: 2 },
        { userId: 2, valuesId: 3 },
        { userId: 3, valuesId: 1 },
        { userId: 3, valuesId: 2 },
        { userId: 3, valuesId: 3 },
    ]);
};
