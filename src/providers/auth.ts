import { Router, Request, Response } from 'express';
import { userRepository } from '../repositories';

export const AuthProvider = (router: Router) => {
    router.post('/auth', async (req: Request, res: Response) => {
        const { email, password } = req.body;
    });

    router.post('/phantom/auth', async (req: Request, res: Response) => {
        const { walletAddress } = req.body;
        const user = await userRepository.findOneBy({ walletAddress });
    });

    return router;
};
