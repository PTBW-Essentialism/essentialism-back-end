module.exports = {
    development: {
        client: "pg",
        connection: {
            database: "essentialtest",
            user: "postgres",
            password: process.env.PASSWORD,
        },
        migrations: {
            directory: "./database/migrations",
            tableName: "dbmigrations",
        },
        seeds: { directory: "./database/seeds" },
    },
    testing: {
        client: "pg",
        connection: "postgres://postgres:password@localhost/essentialtest",
        migrations: {
            directory: "./database/migrations",
            tableName: "dbmigrations",
        },
        seeds: { directory: "./database/seeds" },
    },
    // testing: {
    //     client: "pg",
    //     connection: process.env.DATABASE_URL,
    //     migrations: {
    //         directory: "./database/migrations",
    //         tableName: "dbmigrations",
    //     },
    //     seeds: { directory: "./database/seeds" },
    // },
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
