import "../src/setup.js";
import app from "../src/app.js";
import supertest from "supertest";
import connection from "../src/database/database.js";

beforeAll(async () => {
    await connection.query(
        `
        INSERT INTO users (name, email, password)
		VALUES ('Victor', 'victor@durco.com', 'frigideira');`
    );
});

afterAll(async () => {
    await connection.query(`DELETE FROM users;`);
    connection.end();
});

describe("POST /sign-up", () => {
    it("returns 400 for invalid params", async () => {
        const body = {
            name: "Oi",
            email: "email",
            password: "frigideira",
        };

        const result = await supertest(app).post("/sign-up").send(body);
        const status = result.status;

        expect(status).toEqual(400);
    });

    it("returns 409 for already registered email", async () => {
        const body = {
            name: "victor",
            email: "victor@durco.com",
            password: "frigideira",
        };

        const result = await supertest(app).post("/sign-up").send(body);
        const status = result.status;

        expect(status).toEqual(409);
    });

    it("returns 201 for new user valid params", async () => {
        const body = {
            name: "apitest",
            email: "api@test.com",
            password: "some_password",
        };

        const result = await supertest(app).post("/sign-up").send(body);
        const status = result.status;

        expect(status).toEqual(201);
    });
});
