import request from 'supertest';
import app from '../src/app.js';  

describe('Adoption Router', () => {
  it('Debería obtener todas las adopciones', async () => {
    const res = await request(app).get('/api/adoption');
    expect(res.statusCode).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it('Debería crear una nueva adopción', async () => {
    const res = await request(app).post('/api/adoption').send({
      petId: '12345',
      userId: '67890',
    });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
  });
});
