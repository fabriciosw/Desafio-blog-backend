import supertest from 'supertest';
import app from '../../src/app';

describe('App', () => {
  it('should return hello world', async () => {
    const { status, body } = await supertest(app).get('/api/healthcheck');
    expect(status).toBe(200);
    expect(body.message).toBe('Hello World');
  });
});

// describe('User', () => {
//   it('should be able to create an user', async () => {
//     const { status, body } = await supertest(app).post('/api/v1/users').send({
//       name: 'Red Wacky League Antlez',
//       email: 'red.Wacky@gmail.com',
//       password: '12345',
//     });

//     expect(status).toBe(201);
//     expect(body).toBe('Hello World');
//   });
// });
