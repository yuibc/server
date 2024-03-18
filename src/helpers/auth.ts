import { Request } from 'express';

export const useAuthToken = (req: Request) => {
    const authHeader = req.headers.authorization;
    return {
        accessToken: authHeader && authHeader.split(' ')[1],
        userId: authHeader && authHeader.split(' ')[2],
    };
};
