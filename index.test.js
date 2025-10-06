import request from 'supertest';
import app from './index'; // Assuming your Express app is exported from index.js

describe('Express App', () => {
  test('GET / should return Hello world', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello, CI Pipeline!');
  });
});
