import { Router } from 'express';
import User from '../models/User.js';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;



/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Obtener todos los usuarios
 *     responses:
 *       200:
 *         description: Lista de usuarios.
 */
router.get('/', async (req, res) => {
  const users = await User.find();
  res.json(users);
});