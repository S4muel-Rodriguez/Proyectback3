import Adoption from '../models/adoption.model.js';
import Pet from '../models/pet.model.js';
import User from '../models/user.model.js';

export const createAdoption = async (req, res) => {
  const { userId, petId } = req.body;
  try {
    const user = await User.findById(userId);
    const pet = await Pet.findById(petId);

    if (!user || !pet) {
      return res.status(404).json({ message: 'User or Pet not found' });
    }

    const newAdoption = new Adoption({ user: userId, pet: petId });
    await newAdoption.save();

    res.status(201).json(newAdoption);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAdoptions = async (req, res) => {
  try {
    const adoptions = await Adoption.find().populate('user pet');
    res.status(200).json(adoptions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
