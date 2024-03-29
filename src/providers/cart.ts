import { Router, Request, Response } from 'express';
import { Cart } from '../entity';
import { ResponseMessage } from '../enums';
import { cartRepository as repo, userRepository } from '../repositories';

export const CartProvider = (router: Router) => {
    router.get('/user/:id/cart', async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const user = await userRepository.findOneBy({ id: parseInt(id) });
            const cart = await repo.findBy({ user });
            res.status(200).send(cart);
        } catch (e) {
            res.status(500).send(ResponseMessage.SERVER_ERROR);
        }
    });

    router.post('/cart', async (req: Request, res: Response) => {
        try {
            const { userId } = req.query;
            const user = await userRepository.findOneBy({
                id: parseInt(userId as string),
            });
            const cart = new Cart();
            cart.user = user;
            cart.artwork = req.body;
            cart.createdAt = new Date();
            await repo.save(cart);
            res.status(200).send(ResponseMessage.ADDED_TO_CART);
        } catch (e) {
            res.status(500).send(ResponseMessage.SERVER_ERROR);
        }
    });

    return router;
};
