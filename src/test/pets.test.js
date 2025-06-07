import request from 'supertest';
import app from '../app.js';

describe('Pets Router', () => {
  it('should return a list of mock pets', async () => {
    const response = await request(app).get('/api/mocks/mockingpets');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('should create a new pet', async () => {
    const newPet = {
      name: 'Fluffy',
      species: 'cat',
      age: 2
    };
    const response = await request(app).post('/api/pets').send(newPet);
    expect(response.status).toBe(201);
    expect(response.body.name).toBe(newPet.name);
  });
});
