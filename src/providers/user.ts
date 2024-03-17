import { Router } from 'express';
import { userRepository as repo } from '../repositories/user';

export const UserProvider = (router: Router) => {
    router.get('/users', async () => await repo.find());
    router.post('/user');
    return router;
};
