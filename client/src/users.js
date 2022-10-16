import bcrypt from 'bcryptjs';

export const users = [];

export const salt = bcrypt.genSaltSync(10);