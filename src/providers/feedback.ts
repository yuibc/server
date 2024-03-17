import { Router, Request, Response } from 'express';
import { Feedback } from '../entity';
import { ResponseMessage } from '../enums';
import { feedbackRepository as repo } from '../repositories';

export const FeedbackProvider = (router: Router) => {
    router.get('/feedbacks', async () => await repo.find());

    router.post('/feedback', async (req: Request, res: Response) => {
        try {
            const { email, content } = req.body;
            const feedback = new Feedback();
            feedback.email = email;
            feedback.content = content;
            feedback.sentAt = new Date();
            await repo.save(feedback);
            res.status(201).send(ResponseMessage.SENT_FEEDBACK);
        } catch (e) {
            res.status(500).send(ResponseMessage.SERVER_ERROR);
        }
    });

    return router;
};
