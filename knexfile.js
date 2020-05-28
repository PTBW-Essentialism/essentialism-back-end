module.exports = {
    development: {
        client: "pg",
        connection: process.env.DATABASE_URL,
        migrations: {
            directory: "./database/migrations",
            tableName: "dbmigrations",
        },
        seeds: { directory: "./database/seeds" },
    },
    production: {
        client: "pg",
        connection: process.env.DATABASE_URL,
        migrations: {
            directory: "./database/migrations",
            tableName: "dbmigrations",
        },
        seeds: { directory: "./database/seeds" },
    },
};
