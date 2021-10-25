import app from '../src/app.js';
import supertest from 'supertest';
import connection from '../src/database/database.js';


beforeAll(async () => {
    await connection.query(`
    INSERT INTO sessions (token, "userId")
    VALUES ('TEST_TOKEN', 0)`);
  });

afterAll(async () => {
    await connection.query(`
    DELETE FROM sessions 
    WHERE sessions.token = 'TEST_TOKEN'`);
    connection.end();
  });



describe("POST /registers", () => {

    it('returns 401 when there is no token', async () => {
        const body = {
          value: '50,00',
          description: 'test',
          type: 1,
        };
        const result = await supertest(app).post('/registers').send(body);
        const status = result.status;
        expect(status).toEqual(401);
      });


      it('returns 400 for invalid params', async () => {
        const body = {
          value: '50a',
          description: 'test',
          type: 3, //invalid type
        };
        const result = await supertest(app).post('/registers')
        .set('Authorization', 'Bearer TEST_TOKEN')
        .send(body);
        const status = result.status;
        expect(status).toEqual(400);
      });

});