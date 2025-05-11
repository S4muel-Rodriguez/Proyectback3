import express from 'express';
import User from '../models/user.model.js'; // Importación de modelo de usuario
import Pet from '../models/pet.model.js'; // Importación de modelo de mascota
import bcrypt from 'bcrypt'; // Importación de bcrypt para encriptación

// Módulo para generar usuarios ficticios
const generateMockUsers = (count) => {
  const roles = ['user', 'admin'];
  return Array.from({ length: count }, () => ({
    username: `user_${Math.random().toString(36).substring(2, 8)}`,
    password: bcrypt.hashSync('coder123', 10),
    role: roles[Math.floor(Math.random() * roles.length)],
    pets: [],
  }));
};

// Módulo para generar mascotas ficticias
const generateMockPets = (count) => {
  const species = ['dog', 'cat', 'parrot', 'hamster'];
  return Array.from({ length: count }, () => ({
    name: `pet_${Math.random().toString(36).substring(2, 8)}`,
    species: species[Math.floor(Math.random() * species.length)],
    age: Math.floor(Math.random() * 15) + 1,
  }));
};

const router = express.Router(); // Uso correcto de Router

// Endpoint para mockingpets
router.get('/mockingpets', (req, res) => {
  const pets = generateMockPets(10); // Generar 10 mascotas por defecto
  res.json(pets);
});

// Endpoint para mockingusers
router.get('/mockingusers', (req, res) => {
  const users = generateMockUsers(50); // Generar 50 usuarios
  res.json(users);
});

// Endpoint para insertar datos en la base de datos
router.post('/generateData', async (req, res) => {
  const { users, pets } = req.body;

  if (!users || !pets) {
    return res.status(400).json({ message: 'Please provide both users and pets count.' });
  }

  try {
    const mockUsers = generateMockUsers(users);
    const mockPets = generateMockPets(pets);

    await User.insertMany(mockUsers); // Insertar usuarios en la base de datos
    await Pet.insertMany(mockPets); // Insertar mascotas en la base de datos

    res.status(201).json({ message: 'Data inserted successfully!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
