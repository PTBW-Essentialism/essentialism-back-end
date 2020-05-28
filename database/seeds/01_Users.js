exports.seed = async function (knex) {
    await knex("users").insert([
        {
            username: "Shawn", //1
            password: "Shawn",
            email: "Shawn@Shawn.org",
            firstName: "Shawn",
            lastName: "Batson",
        },
        {
            username: "Austin", //2
            password: "Austin",
            email: "Austin@Austin.org",
            firstName: "Austin",
            lastName: "Kelsay",
        },
        {
            username: "Tremain", //3
            password: "Tremain",
            email: "Tremain@Tremain.org",
            firstName: "Tremain",
            lastName: "Hebert",
        },
        {
            username: "Keenan", //3
            password: "Keenan",
            email: "Keenan@Keenan.org",
            firstName: "Keenan",
            lastName: "hallas",
        },
    ]);
};
