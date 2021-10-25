import app from '../src/app.js';
import supertest from 'supertest';
import connection from '../src/database/database.js';
import bcrypt from "bcrypt";


beforeAll(async () => {
    const passwordHash = bcrypt.hashSync('123456', 10);
    await connection.query(`
        INSERT INTO users (name, email, password)
		VALUES ('Teste', 'teste@email.com', $1);`, [passwordHash]);
});

afterAll(async () => {
    await connection.query(`
        DELETE FROM users 
        WHERE users.email = 'teste@email.com'`);
    connection.end();
  });


describe("POST /sign-in", () => {


    it("returns 400 for invalid params", async () => {
		const body = {
			email: "email.com",
			password: "senha",
		};

		const result = await supertest(app).post("/sign-in").send(body);
		const status = result.statusCode;

		expect(status).toEqual(400);
	});


    it("returns 401 for wrong password", async () => {
		const body = {
			email: "teste@email.com",
			password: "senha1234",
		};

		const result = await supertest(app).post("/sign-in").send(body);
		const status = result.statusCode;

		expect(status).toEqual(401);
	});


    it("returns 404 for non existent user", async () => {
		const body = {
			email: "not_registered_user@email.com",
			password: "senha1234",
		};

		const result = await supertest(app).post("/sign-in").send(body);
		const status = result.statusCode;

		expect(status).toEqual(404);
	});


    it("returns 200 for valid params", async () => {
		const body = {
			email: "teste@email.com",
			password: '123456',
		};

		const result = await supertest(app).post("/sign-in").send(body);
		const status = result.statusCode;

		expect(status).toEqual(200);
	});
});