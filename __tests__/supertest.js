const request = require('supertest');
const fs = require('fs');
const path = require('path');

// const testJsonFile = path.resolve(__dirname, '../server/db/markets.test.json');
const server = 'http://localhost:3000';

describe('Route Integration', () => {
    describe('/', () => {
        describe('GET', () => {
            it('responds with 200 status', () => {
                return request(server)
                    .get('/')
                    .expect(200);
            });
        });
    });
});