exports.seed = async function (knex) {
    await knex("initiatives").insert([
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
            userId: 3,
            userValuesId: 3,
            completed: false,
            repeatable: true,
        },
    ]);
};
