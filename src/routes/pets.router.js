import { Router } from 'express';
import Pet from '../models/Pet.js';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const pets = await Pet.find();
    res.json(pets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
