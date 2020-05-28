exports.seed = async function (knex) {
    await knex("uservalues").insert([
        { userId: 1, valuesId: 1 }, //1
        { userId: 1, valuesId: 2 }, //2
        { userId: 1, valuesId: 3 }, //3
        { userId: 2, valuesId: 1 }, //4
        { userId: 2, valuesId: 2 }, //5
        { userId: 2, valuesId: 3 }, //6
        { userId: 3, valuesId: 1 }, //7
        { userId: 3, valuesId: 2 }, //8
        { userId: 3, valuesId: 3 }, //9
    ]);
};
