import { Router, Request, Response } from 'express';
import { useAuthToken } from '../helpers';
import { userRepository } from '../repositories';
import jwt from 'jsonwebtoken';
import { verifyWalletAddress } from '../middlewares';

export const AuthProvider = (router: Router) => {
    // router.post(
    //     '/auth',
    //     verifyTraditional,
    //     async (req: Request, res: Response) => {
    //         const { userId, email } = res.locals;
    //         const { accessToken: token } = useAuthToken(req);
    //         const user = await userRepository.findOneBy({ id: userId });

    //         if (!token) {
    //             const accessToken = jwt.sign(user.displayName, email);
    //             return res.status(200).json({
    //                 accessToken,
    //                 userId,
    //             });
    //         }

    //         const payload = jwt.verify(token, email);
    //         if (!payload) {
    //             res.status(403).send(
    //                 'Invalid token or your token has been expired.',
    //             );
    //         }
    //     },
    // );

    router.post(
        '/wallet/auth',
        verifyWalletAddress,
        async (req: Request, res: Response) => {
            const { walletAddress } = res.locals;
            const user = await userRepository.findOneBy({ walletAddress });
            const { accessToken: token } = useAuthToken(req);

            if (!token) {
                const accessToken = jwt.sign(
                    user.displayName,
                    user.walletAddress,
                );
                return res.status(200).json({
                    accessToken,
                    userId: user.id,
                });
            }

            const payload = jwt.verify(token, user.walletAddress);
            console.log(payload);
            if (!payload) {
                res.status(403);
                throw new Error(
                    'Invalid token or your token has been expired.',
                );
            }
        },
    );

    return router;
};
