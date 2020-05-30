exports.seed = async function (knex) {
    await knex("users").insert([
        {
            username: "Shawn", //1
            password: "Shawn",
            email: "Shawn@Shawn.org",
            firstName: "Shawn",
            lastName: "Batson",
            // role: "admin",
        },
        {
            username: "Austin", //2
            password: "Austin",
            email: "Austin@Austin.org",
            firstName: "Austin",
            lastName: "Kelsay",
            // role: "admin",
        },
        {
            username: "Tremain", //3
            password: "Tremain",
            email: "Tremain@Tremain.org",
            firstName: "Tremain",
            lastName: "Hebert",
            // role: "admin",
        },
        {
            username: "Keenan", //3
            password: "Keenan",
            email: "Keenan@Keenan.org",
            firstName: "Keenan",
            lastName: "hallas",
            // role: "admin",
        },
    ]);
};
