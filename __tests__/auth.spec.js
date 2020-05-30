const supertest = require("supertest");
const server = require("../index");
const db = require("../database/config");
require("dotenv").config;

afterAll(async () => {
    await db.destroy();
});

describe("AUTH TESTING", () => {
    test("POSTING a create user/register", async () => {
        const user = {
            username: "tester1",
            password: "tester1",
            email: "tester1@tester.com",
            firstName: "Shawn1",
            lastName: "Batson1",
        };

        const res = await supertest(server).post("/auth/register").send(user);
        expect(res.statusCode).toBe(409);
        // expect(res.type).toBe("application/json");
        // expect(res.body.username).toBe("tester1");
        // expect(res.body.email).toMatch(/tester/i);
        // expect(res.body.firstName).toBe("Shawn1");
        // expect(res.body.lastName).toBe("Batson1");
    });
});

describe("LOGIN TESTING", () => {
    test("LOG IN", async () => {
        const user = {
            username: "tester1",
            password: "tester1",
        };

        const res = await supertest(server).post("/auth/login").send(user);

        expect(res.statusCode).toBe(200);
    });
});
