exports.seed = async function (knex) {
    await knex("Initiatives").insert([
        {
            iNname: "Go to school",
            iDescription: "I'm going to school!",
            dueDate: "01-01-21",
            userId: 1,
            userValuesId: 3,
            completed: false,
            repeatable: true,
        },
        {
            iNname: "Go to school",
            iDescription: "I'm going to school!",
            dueDate: "01-01-21",
            userId: 2,
            userValuesId: 3,
            completed: false,
            repeatable: true,
        },
        {
            iNname: "Go to school",
            iDescription: "I'm going to school!",
            dueDate: "01-01-21",
            userId: 4,
            userValuesId: 3,
            completed: false,
            repeatable: true,
        },
        {
            iNname: "Go to school",
            iDescription: "I'm going to school!",
            dueDate: "01-01-21",
            userId: 4,
            userValuesId: 3,
            completed: false,
            repeatable: true,
        },
    ]);
};
