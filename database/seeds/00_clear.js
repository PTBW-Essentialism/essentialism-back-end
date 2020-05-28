exports.seed = async function (knex) {
    // if (process.env.NODE_ENV != "production") {
    await knex.raw("TRUNCATE TABLE Initiatives CASCADE");
    await knex.raw("TRUNCATE TABLE UserValues CASCADE");
    await knex.raw("TRUNCATE TABLE Values CASCADE");
    await knex.raw("TRUNCATE TABLE Users CASCADE");
    // await knex("Initiatives").truncate();
    // await knex("UserValues").truncate();
    // await knex("Values").truncate();
    // await knex("Users").truncate();
    // await knex.raw("SET foreign_key_checks = 1");

    // }
};
// exports.seed = async function (knex) {
//     switch (process.env.NODE_ENV) {
//         case "production":
//             await knex.raw(
//                 "TRUNCATE TABLE UserValues RESTART IDENTITY CASCADE"
//             );
//             await knex.raw(
//                 "TRUNCATE TABLE Initiatives RESTART IDENTITY CASCADE"
//             );
//             await knex.raw("TRUNCATE TABLE Values RESTART IDENTITY CASCADE");
//             await knex.raw("TRUNCATE TABLE Users RESTART IDENTITY CASCADE");
//             break;
//         default:
//             // development, testing, anything that isn't using PG
//             await knex("UserValues").truncate();
//             await knex("Initiatives").truncate();
//             await knex("Values").truncate();
//             await knex("Users").truncate();
//     }
// };
