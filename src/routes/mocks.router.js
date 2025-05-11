import express from 'express';
import User from '../models/user.model.js';
import Pet from '../models/pet.model.js';
import { generateUsers } from '../services/mockingService.js';

const router = express.Router();

// Mocking users endpoint
router.get('/mockingusers', async (req, res) => {
  const users = generateUsers(50);
  res.json(users);
});

// Insert users and pets
router.post('/generateData', async (req, res) => {
  const { users: userCount, pets: petCount } = req.body;

  try {
    const users = generateUsers(userCount);
    await User.insertMany(users);

    const pets = Array.from({ length: petCount }, (_, i) => ({
      name: `Pet${i + 1}`,
      type: 'Dog',
    }));
    await Pet.insertMany(pets);

    res.status(201).json({ message: 'Data inserted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
