import bcrypt from 'bcrypt';

const saltRounds = 10;

export const hashPassword = async (password: string) => {
    return await bcrypt.hash(password, saltRounds);
};

export const compare = async (password: string, hash: string) => {
    return await bcrypt.compare(password, hash);
};
