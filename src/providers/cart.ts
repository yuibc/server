import { Router, Request, Response } from 'express';
import { Cart } from '../entity';
import { ResponseMessage } from '../enums';
import {
    cartRepository as repo,
    userRepository,
    artworkRepository,
} from '../repositories';

export const CartProvider = (router: Router) => {
    router.get('/user/:id/cart', async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const user = await userRepository.findOneBy({ id: parseInt(id) });
            const cart = await repo.find({
                where: { user },
                relations: ['artwork'],
            });
            const artworksFromCart = [];
            for (const item of cart) {
                artworksFromCart.push(item.artwork);
            }
            res.status(200).send(artworksFromCart);
        } catch (e) {
            console.log(e);
            res.status(500).send(ResponseMessage.SERVER_ERROR);
        }
    });

    router.post('/cart', async (req: Request, res: Response) => {
        try {
            const { userId } = req.query;
            const { artwork } = req.body;
            const user = await userRepository.findOneBy({
                id: parseInt(userId as string),
            });
            const addedArtwork = await artworkRepository.findOneBy({
                id: artwork,
            });
            const cart = new Cart();
            cart.user = user;
            cart.artwork = addedArtwork;
            cart.createdAt = new Date();
            await repo.save(cart);
            res.status(200).send(ResponseMessage.ADDED_TO_CART);
        } catch (e) {
            console.log(e);
            res.status(500).send(ResponseMessage.SERVER_ERROR);
        }
    });

    return router;
};
