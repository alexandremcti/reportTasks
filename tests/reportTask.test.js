const app = require('./../src/server');
const request = require('supertest');

describe('reportTask', () => {
    it("should save a request in a json file", async () => {
        const response = await request(app)
            .post('/tasks')
            .send({ task: 'task 1' })
            .expect(200)


        expect(JSON.parse(response.text)).toEqual({ status: 'ok' });
    })
})