const supertest = require("supertest");
const server = require("../index");
// const db = require("../database/config"),

describe("AUTH TESTING", () => {
    test("POSTING a create user/register", async () => {
        const user = {
            username: "tester",
            password: "tester",
            email: "tester@tester.com",
            firstName: "Shawn",
            lastName: "Batson",
            role: "user",
        };

        const res = await (
            await supertest(server).post("http://localhost:5000/auth/register")
        ).send(user);
        expect(res.statusCode).toBe(200);
        expect(res.type).toBe("application/json");
        expect(res.body.username).toBe("tester");
        expect(res.body.email).toMatch(/tester/i);
        expect(res.body.firstName).toBe("Shawn");
        expect(res.body.lastName).toBe("Batson");
        expect(res.body.role).toBe("user");
    });
});
