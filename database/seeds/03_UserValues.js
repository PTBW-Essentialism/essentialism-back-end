exports.seed = async function (knex) {
    return knex("UserValues")
        .del()
        .then(
            await knex("UserValues").insert([
                { userId: 1, valuesId: 1 },
                { userId: 1, valuesId: 2 },
                { userId: 1, valuesId: 3 },
                { userId: 2, valuesId: 1 },
                { userId: 2, valuesId: 2 },
                { userId: 2, valuesId: 3 },
                { userId: 3, valuesId: 1 },
                { userId: 3, valuesId: 2 },
                { userId: 3, valuesId: 3 },
                { userId: 4, valuesId: 1 },
                { userId: 4, valuesId: 2 },
                { userId: 4, valuesId: 3 },
                { userId: 5, valuesId: 1 },
                { userId: 5, valuesId: 2 },
                { userId: 5, valuesId: 3 },
            ])
        );
};
