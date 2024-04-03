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
            const list = await repo.find({
                where: { payer },
                relations: ['payer', 'artwork'],
            });
            const receipts = [];
            for (const receipt of list) {
                receipts.push({
                    id: receipt.id,
                    payer: payer.walletAddress,
                    artworkTitle: receipt.artwork.title,
                    artworkUrl: receipt.artwork.url,
                    mint: receipt.artwork.mint,
                    amount: receipt.artwork.cryptoPrice,
                    purchasedAt: receipt.purchasedAt,
                    transaction: receipt.transaction,
                    status: receipt.status,
                });
            }
            res.status(200).send(receipts);
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
