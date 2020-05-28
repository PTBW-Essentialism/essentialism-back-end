exports.seed = async function (knex) {
    return knex("Initiatives")
        .del()
        .then(
            await knex("Initiatives").insert([
                {
                    iName: "Go to school",
                    iDescription: "I'm going to school!",
                    dueDate: "01-01-21",
                    userId: 1,
                    userValuesId: 3,
                    completed: false,
                    repeatable: true,
                },
                {
                    iName: "Go to school",
                    iDescription: "I'm going to school!",
                    dueDate: "01-01-21",
                    userId: 2,
                    userValuesId: 3,
                    completed: false,
                    repeatable: true,
                },
                {
                    iName: "Go to school",
                    iDescription: "I'm going to school!",
                    dueDate: "01-01-21",
                    userId: 4,
                    userValuesId: 3,
                    completed: false,
                    repeatable: true,
                },
                {
                    iName: "Go to school",
                    iDescription: "I'm going to school!",
                    dueDate: "01-01-21",
                    userId: 5,
                    userValuesId: 3,
                    completed: false,
                    repeatable: true,
                },
            ])
        );
};
