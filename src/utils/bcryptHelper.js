import bcrypt from 'bcrypt';

export const hashPassword = (password) => bcrypt.hashSync(password, 10);
