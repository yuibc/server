import { Router, Request, Response } from 'express';
import { Category } from '../entity';
import { ResponseMessage } from '../enums';
import { categoryRepository as repo } from '../repositories';

export const CategoryProvider = (router: Router) => {
    router.get('/categories', async () => await repo.find());

    router.post('/category', async (req: Request, res: Response) => {
        try {
            const { display } = req.body;
            const category = new Category();
            category.display = display;
            category.createdAt = new Date();
            await repo.save(category);
            res.status(201).send(ResponseMessage.SUCCESS);
        } catch (e) {
            res.status(500).send(ResponseMessage.SERVER_ERROR);
        }
    });

    return router;
};
