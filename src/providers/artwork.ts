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
                const artworks = await repo.findBy({ user });
                res.status(200).send({ creator: user.displayName, artworks });
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
            await repo.save(artwork);
            res.status(201).send(ResponseMessage.SUCCESS);
        } catch (e) {
            console.log(e);
            res.status(500).send(ResponseMessage.SERVER_ERROR);
        }
    });

    router.get('/artworks', async (req: Request, res: Response) => {
        try {
            const artworks = await repo.find({ relations: ['user'] });
            res.status(200).send(artworks);
        } catch (e) {
            console.log(e);
            res.status(500).send(ResponseMessage.SERVER_ERROR);
        }
    });

    return router;
};
