import Pet from '../models/pet.model.js';

export const getPets = async (req, res) => {
  try {
    const pets = await Pet.find();
    res.status(200).json(pets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createPet = async (req, res) => {
  const { name, species, age } = req.body;
  try {
    const newPet = new Pet({ name, species, age });
    await newPet.save();
    res.status(201).json(newPet);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
