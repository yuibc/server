import { Router, Request, Response } from 'express';
import { artworkRepository as repo, userRepository } from '../repositories';
import { ResponseMessage } from '../enums';
import { Artwork } from '../entity';

// const storage = multer.diskStorage({
//     destination: FILE_UPLOAD_DEST,
// });

// const upload = multer({ storage });

export const ArtworkProvider = (router: Router) => {
    router.get(
        '/user/:walletAddress/artworks',
        async (req: Request, res: Response) => {
            try {
                const { walletAddress } = req.params;
                const user = await userRepository.findOneBy({ walletAddress });
                const artworks = await repo.find({
                    where: { user },
                });
                const data = [];
                for (const artwork of artworks) {
                    data.push({
                        ...artwork,
                        creator: user.displayName,
                    });
                }
                res.status(200).send(data);
            } catch (e) {
                console.log(e);
                res.status(500).send(ResponseMessage.SERVER_ERROR);
            }
        },
    );

    router.post('/user/:id/artwork', async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const {
                title,
                description,
                url,
                cryptoPrice,
                currency,
                published,
                metadata,
                instructions,
                mint,
            } = req.body;
            const user = await userRepository.findOneBy({
                id: parseInt(id),
            });
            const artwork = new Artwork();
            artwork.url = url;
            artwork.currency = currency;
            artwork.published = published;
            artwork.title = title;
            artwork.description = description;
            artwork.cryptoPrice = cryptoPrice;
            artwork.metadata = metadata;
            artwork.createdAt = new Date();
            artwork.user = user;
            artwork.instructions = instructions;
            artwork.mint = mint;
            await repo.save(artwork);
            res.status(201).send(ResponseMessage.SUCCESS);
        } catch (e) {
            console.log(e);
            res.status(500).send(ResponseMessage.SERVER_ERROR);
        }
    });

    router.get('/artworks', async (req: Request, res: Response) => {
        try {
            const data = [];
            const artworks = await repo.find({
                relations: ['user'],
                select: [
                    'id',
                    'url',
                    'user',
                    'mint',
                    'title',
                    'currency',
                    'metadata',
                    'published',
                    'createdAt',
                    'cryptoPrice',
                    'description',
                ],
            });
            for (const artwork of artworks) {
                data.push({
                    id: artwork.id,
                    url: artwork.url,
                    mint: artwork.mint,
                    metadata: artwork.metadata,
                    title: artwork.title,
                    description: artwork.description,
                    published: artwork.published,
                    creator: artwork.user.displayName,
                    walletAddress: artwork.user.walletAddress,
                    createdAt: artwork.createdAt,
                    cryptoPrice: artwork.cryptoPrice,
                    currency: artwork.currency,
                });
            }
            res.status(200).send(data);
        } catch (e) {
            console.log(e);
            res.status(500).send(ResponseMessage.SERVER_ERROR);
        }
    });

    router.put(
        '/artwork/:id/published',
        async (req: Request, res: Response) => {
            try {
                const { id } = req.params;
                const artwork = await repo.findOne({
                    where: { id: parseInt(id) },
                    select: ['published'],
                });
                await repo
                    .createQueryBuilder()
                    .update(Artwork)
                    .set({ published: !artwork.published })
                    .where('id = :id', { id: parseInt(id) })
                    .execute();
                res.status(200).send(ResponseMessage.SUCCESS);
            } catch (e) {
                console.log(e);
                res.status(500).send(ResponseMessage.SERVER_ERROR);
            }
        },
    );

    router.put('/artwork/:id/price', async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const { price } = req.body;
            await repo
                .createQueryBuilder()
                .update(Artwork)
                .set({ cryptoPrice: parseFloat(price) })
                .where('id = :id', { id: parseInt(id) })
                .execute();
            res.status(200).send(ResponseMessage.SUCCESS);
        } catch (e) {
            console.log(e);
            res.status(500).send(ResponseMessage.SERVER_ERROR);
        }
    });

    return router;
};
