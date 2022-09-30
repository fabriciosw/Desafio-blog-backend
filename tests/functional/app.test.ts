import supertest from 'supertest';
import app from '../../src/app';

describe('App', () => {
  it('should return hello world', async () => {
    const { status, body } = await supertest(app).get('/api/healthcheck');
    expect(status).toBe(200);
    expect(body.message).toBe('Hello World');
  });
});
