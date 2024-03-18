import { Router, Request, Response } from 'express';
import { useAuthToken } from '../helpers';
import { userRepository } from '../repositories';
import jwt from 'jsonwebtoken';

export const AuthProvider = (router: Router) => {
    router.post('/auth', async (req: Request, res: Response) => {
        const { userId, email } = req.body;
        const { accessToken: token } = useAuthToken(req);
        const user = await userRepository.findOneBy({ id: userId });

        if (!token) {
            const accessToken = jwt.sign(user.displayName, email);
            return {
                accessToken,
                userId,
            };
        }

        const payload = jwt.verify(token, email);
        if (!payload) {
            res.status(403);
            throw new Error('Invalid token or your token has been expired.');
        }
    });

    router.post('/phantom/auth', async (req: Request, res: Response) => {
        const { walletAddress } = req.body;
        const user = await userRepository.findOneBy({ walletAddress });
        const { accessToken: token } = useAuthToken(req);

        if (!token) {
            const accessToken = jwt.sign(user.displayName, user.email);
            return {
                accessToken,
                userId: user.id,
            };
        }

        const payload = jwt.verify(token, user.email);
        if (!payload) {
            res.status(403);
            throw new Error('Invalid token or your token has been expired.');
        }
    });

    return router;
};
