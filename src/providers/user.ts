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
            await repo.save(user);
            res.status(201).send(ResponseMessage.ACCOUNT_REGISTRATED);
        } catch (e) {
            res.status(500).send(ResponseMessage.SERVER_ERROR);
        }
    });
    return router;
};
