import { Router, Request, Response } from 'express';
import { User } from '../entity';
import { ResponseMessage } from '../enums';
import { userRepository as repo } from '../repositories/user';

export const UserProvider = (router: Router) => {
    router.get('/users', async (req: Request, res: Response) => {
        try {
            const users = await repo.find({
                select: [
                    'displayName',
                    'walletAddress',
                    'id',
                    'follows',
                    'email',
                ],
                relations: ['follows'],
            });
            res.status(200).send(users);
        } catch (e) {
            console.log(e);
            res.status(500).send(ResponseMessage.SERVER_ERROR);
        }
    });

    router.get('/:displayName/user', async (req: Request, res: Response) => {
        try {
            const { displayName } = req.params;
            const user = await repo.findOne({
                where: { displayName },
                select: ['walletAddress'],
            });
            res.status(200).send(user);
        } catch (e) {
            console.log(e);
            res.status(500).send(ResponseMessage.SERVER_ERROR);
        }
    });

    router.get('/users/:id', async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const user = await repo.findOne({
                where: { id: parseInt(id) },
                select: ['email', 'displayName', 'walletAddress'],
            });
            res.status(200).send(user);
        } catch (e) {
            console.log(e);
            res.status(500).send(ResponseMessage.SERVER_ERROR);
        }
    });

    router.post('/user', async (req: Request, res: Response) => {
        try {
            const { email, displayName, walletAddress } = req.body;
            const user = new User();
            user.email = email;
            user.isAdmin = false;
            user.displayName = `@${displayName}`;
            user.walletAddress = walletAddress;
            user.createdAt = new Date();
            await repo.save(user);
            res.status(201).send(ResponseMessage.ACCOUNT_REGISTRATED);
        } catch (e) {
            console.log(e);
            res.status(500).send(ResponseMessage.SERVER_ERROR);
        }
    });

    router.put('/user/:id/wallet', async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const { walletAddress } = req.body;
            await repo
                .createQueryBuilder()
                .update(User)
                .set({ walletAddress })
                .where('id = :id', { id: parseInt(id) })
                .execute();
            res.status(200).send(ResponseMessage.WALLET_CONNECT_ESTABLISHED);
        } catch (e) {
            console.log(e);
            res.status(500).send(ResponseMessage.SERVER_ERROR);
        }
    });

    router.get(
        '/wallet/:walletAddress/user',
        async (req: Request, res: Response) => {
            try {
                const { walletAddress } = req.params;
                const user = await repo.findOne({
                    where: { walletAddress: walletAddress as string },
                    select: ['email', 'displayName', 'walletAddress'],
                });
                res.status(200).send(user);
            } catch (e) {
                console.log(e);
                res.status(500).send(ResponseMessage.SERVER_ERROR);
            }
        },
    );

    return router;
};
