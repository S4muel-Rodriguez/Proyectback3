import { hashPassword } from '../utils/bcryptHelper.js';

export const generateUsers = (count) => {
  const users = [];
  for (let i = 0; i < count; i++) {
    users.push({
      name: `User${i + 1}`,
      email: `user${i + 1}@example.com`,
      password: hashPassword('coder123'),
      role: Math.random() > 0.5 ? 'user' : 'admin',
      pets: [],
    });
  }
  return users;
};
