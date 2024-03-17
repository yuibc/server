import { Router, Request, Response } from 'express';
import { artworkRepository as repo, userRepository } from '../repositories';

export const ArtworkProvider = (router: Router) => {
    router.get('/user/:id/artworks', async (req: Request, res: Response) => {
        const { id } = req.params;
        const user = await userRepository.findOneBy({ id: parseInt(id) });
        const artworks = await repo.findBy({ user });
        res.status(200).send(artworks);
    });

    router.post('/artwork/upload');
};
