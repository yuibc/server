import multer from 'multer';
import { Router, Request, Response } from 'express';
import { artworkRepository as repo, userRepository } from '../repositories';
import { ResponseMessage } from '../enums';
import { Artwork } from '../entity';
import { createGenericFile } from '@metaplex-foundation/umi';
import { FILE_UPLOAD_DEST } from '../config';

const storage = multer.diskStorage({
    destination: FILE_UPLOAD_DEST,
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
            res.status(201).send(ResponseMessage.SUCCESS);
        } catch (e) {
            console.log(e);
            res.status(500).send(ResponseMessage.SERVER_ERROR);
        }
    });

    router.post(
        '/generic/artwork/upload',
        upload.single('xfile'),
        async (req: Request, res: Response) => {
            try {
                const file = req.file;
                if (!file) {
                    res.status(500).send(ResponseMessage.FAILED_TO_UPLOAD);
                    return;
                }
                const artworkBuffer = createGenericFile(
                    file.buffer,
                    file.filename,
                );
                res.status(201).json({ artworkBuffer });
            } catch (e) {
                console.log(e);
                res.status(500).send(ResponseMessage.SERVER_ERROR);
            }
        },
    );

    return router;
};
