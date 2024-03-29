import { Router, Request, Response } from 'express';
import { User } from '../entity';
import { ResponseMessage } from '../enums';
import { userRepository as repo } from '../repositories/user';

export const UserProvider = (router: Router) => {
    router.get('/users', async () => await repo.find());

    router.post('/user', async (req: Request, res: Response) => {
        try {
            const { email, displayName, password } = req.body;
            const user = new User();
            user.email = email;
            await user.setPassword(password);
            user.isAdmin = false;
            user.displayName = displayName;
            user.createdAt = new Date();
            await repo.save(user);
            res.status(201).send(ResponseMessage.ACCOUNT_REGISTRATED);
        } catch (e) {
            console.error(e);
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
            res.status(500).send(ResponseMessage.SERVER_ERROR);
        }
    });

    return router;
};
