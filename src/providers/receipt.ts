import { Router, Request, Response } from 'express';
import {
    artworkRepository,
    receiptRepository as repo,
    userRepository,
} from '../repositories';
import { OwningStatus, ResponseMessage } from '../enums';
import { Receipt } from '../entity';

export const ReceiptProvider = (router: Router) => {
    router.get('/user/:id/receipts', async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const payer = await userRepository.findOneBy({ id: parseInt(id) });
            const receipt = await repo.find({ where: { payer } });
            res.status(200).send(receipt);
        } catch (e) {
            console.log(e);
            res.status(500).send(ResponseMessage.SERVER_ERROR);
        }
    });

    router.post(
        '/user/:id/receipt/create',
        async (req: Request, res: Response) => {
            try {
                const { id } = req.params;
                const { artworkId, transaction } = req.body;
                const payer = await userRepository.findOneBy({
                    id: parseInt(id),
                });
                const artwork = await artworkRepository.findOneBy({
                    id: parseInt(artworkId),
                });
                const receipt = new Receipt();
                receipt.payer = payer;
                receipt.status = OwningStatus.PAID;
                receipt.artwork = artwork;
                receipt.purchasedAt = new Date();
                receipt.transaction = transaction;
                repo.save(receipt);
                res.status(200).send(ResponseMessage.CREATED_RECEIPT);
            } catch (e) {
                console.log(e);
                res.status(500).send(ResponseMessage.SERVER_ERROR);
            }
        },
    );

    return router;
};
