import { Router, Request, Response } from 'express';
import { Follow } from '../entity';
import { ResponseMessage } from '../enums';
import { followRepository as repo, userRepository } from '../repositories';

export const FollowProvider = (router: Router) => {
    router.get('/user/:id/follows', async (req: Request, res: Response) => {
        const { id } = req.params;
        const user = await userRepository.findOneBy({ id: parseInt(id) });
        const follows = await repo.findBy({ user });
        res.status(200).send(follows);
    });

    router.post('/user/:id/follow', async (req: Request, res: Response) => {
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
        repo.save(follow);
        res.status(200).send(ResponseMessage.FOLLOWED);
    });
};
