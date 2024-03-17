import { Router, Request, Response } from 'express';
import { Category } from '../entity';
import { ResponseMessage } from '../enums';
import { categoryRepository as repo } from '../repositories';

export const CategoryProvider = (router: Router) => {
    router.get('/categories', async () => await repo.find());

    router.post('/category', async (req: Request, res: Response) => {
        const { display } = req.body;
        const category = new Category();
        category.display = display;
        category.createdAt = new Date();
        res.status(201).send(ResponseMessage.SUCCESS);
    });

    return router;
};
