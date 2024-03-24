import multer from 'multer';
import { Router, Request, Response } from 'express';
import { artworkRepository as repo, userRepository } from '../repositories';
import { ResponseMessage } from '../enums';
import { Artwork } from '../entity';
import { useMetaplexHelper } from '../helpers';
import { createGenericFile } from '@metaplex-foundation/umi';

const storage = multer.diskStorage({
    destination: './public/upload/',
});

const upload = multer({ storage });

export const ArtworkProvider = (router: Router) => {
    router.get('/user/:id/artworks', async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const user = await userRepository.findOneBy({ id: parseInt(id) });
            const artworks = await repo.findBy({ user });
            res.status(200).send(artworks);
        } catch (e) {
            console.log(e);
            res.status(500).send(ResponseMessage.SERVER_ERROR);
        }
    });

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
            artwork.convertedPrice = 0;
            artwork.createdAt = new Date();
            artwork.user = user;
            await repo.save(artwork);
        } catch (e) {
            console.log(e);
            res.status(500).send(ResponseMessage.SERVER_ERROR);
        }
    });

    router.post(
        '/nft/artwork/upload',
        upload.single('xfile'),
        async (req: Request, res: Response) => {
            try {
                const { uploadArtwork } = useMetaplexHelper();
                const file = req.file;
                if (!file) {
                    res.status(500).send(ResponseMessage.FAILED_TO_UPLOAD);
                    return;
                }
                const artwork = createGenericFile(file.buffer, file.filename);
                const artworkUri = await uploadArtwork(artwork);
                res.status(201).json({ artworkUri });
            } catch (e) {
                console.log(e);
                res.status(500).send(ResponseMessage.SERVER_ERROR);
            }
        },
    );

    router.post('/nft/metadata/upload', async (req: Request, res: Response) => {
        try {
            const { uploadArtworkMetadata } = useMetaplexHelper();
            const { title, description, owner, artworkUri } = req.body;
            const artworkMetadataUri = await uploadArtworkMetadata({
                title,
                description,
                owner,
                artworkUri,
            });
            res.status(201).json({ artworkMetadataUri });
        } catch (e) {
            console.log(e);
            res.status(500).send(ResponseMessage.SERVER_ERROR);
        }
    });

    return router;
};
