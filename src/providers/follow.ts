import { Router, Request, Response } from 'express';
import { Follow } from '../entity';
import { ResponseMessage } from '../enums';
import { followRepository as repo, userRepository } from '../repositories';

export const FollowProvider = (router: Router) => {
    router.get('/user/:id/followers', async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const user = await userRepository.findOneBy({ id: parseInt(id) });
            const follows = await repo.findBy({ user });
            res.status(200).send(follows);
        } catch (e) {
            res.status(500).send(ResponseMessage.SERVER_ERROR);
        }
    });

    router.post('/user/:id/follow', async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const { userId } = req.query;
            const user = await userRepository.findOneBy({ id: parseInt(id) });
            const followingUser = await userRepository.findOneBy({
                id: parseInt(userId as string),
            });
            const follow = new Follow();
            follow.user = user;
            follow.followingUser = followingUser;
            follow.createdAt = new Date();
            await repo.save(follow);
            res.status(200).send(ResponseMessage.FOLLOWED);
        } catch (e) {
            res.status(500).send(ResponseMessage.SERVER_ERROR);
        }
    });

    return router;
};
