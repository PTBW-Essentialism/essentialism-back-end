const supertest = require("supertest");
const server = require("../index");
const db = require("../database/config");
require("dotenv").config;

// beforeEach(async () => {
//     await db.seed.run();
// });

afterAll(async () => {
    await db.destroy();
});

describe("TESTING USERS ENDPOINTS", async () => {
    test("get /", async () => {
        const user = {
            username: "tester1",
            password: "tester1",
        };

        const res = await supertest(server).post("/auth/login").send(user);

        await supertest(server)
            .get("/users")
            .set("authorization", (token = res.body.token))
            .then((res) => {
                expect(res.statusCode).toBe(200);
                expect(res.type).toBe("application/json");
                expect(res.body).toBeTruthy();
            });
    });

    test("TESTING VALUES ENDPOINT", async () => {
        const res = await supertest(server).get("/values");
        expect(res.statusCode).toBe(200);
        expect(res.type).toBe("application/json");
        expect(res.body).toBeTruthy();
    });

    test("TESTING POSTING A PERSONAL VALUE", async () => {
        const user = {
            username: "tester1",
            password: "tester1",
        };
        const object = {
            userId: "5",
            valuesId: "1",
        };

        const res = await supertest(server).post("/auth/login").send(user);
        const token = res.body.token;
        await supertest(server)
            .post("/users/5/focus")
            .send(object)
            .set("authorization", token)
            .then((res) => {
                expect(res.statusCode).toBe(200);
            });
    });

    test("TESTING POSTING A PERSONAL INITIAVE", async () => {
        const user = {
            username: "tester1",
            password: "tester1",
        };
        const object = {
            iName: "test insertion3",
            iDescription: "test insertion3",
            dueDate: "05-05-21",
            userId: 5,
            userValuesId: 1,
            completed: false,
            repeatable: false,
        };
        const res = await supertest(server).post("/auth/login").send(user);
        const token = res.body.token;
        await supertest(server)
            .post("/users/5/initiatives")
            .send(object)
            .set("authorization", token)
            .then((res) => {
                expect(res.statusCode).toBe(201);
            });
    });
    test("GETTING A PERSONAL INITIATIVE", async () => {
        const user = {
            username: "tester1",
            password: "tester1",
        };
        const res = await supertest(server).post("/auth/login").send(user);
        const token = res.body.token;
        await supertest(server)
            .get("/users/5/initiatives")
            .set("authorization", token)
            .then((res) => {
                expect(res.statusCode).toBe(200);
            });
    });
});
