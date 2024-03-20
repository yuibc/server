import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import { Router, Request, Response } from 'express';
import { artworkRepository as repo, userRepository } from '../repositories';
import {
    CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET,
    CLOUDINARY_CLOUD_NAME,
} from '../config';
import { ResponseMessage } from '../enums';

cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
    cloudinary,
    params: async (req, file) => {
        return {
            folder: 'artworks',
            format: 'jpeg',
            public_id: 'computed-file-name',
        };
    },
});

const parser = multer({ storage });

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

    router.post(
        '/artwork/upload',
        parser.single('artwork'),
        async (req: Request, res: Response) => {
            const file = req.file;
            if (!file) {
                return res.status(500).send(ResponseMessage.FAILED_TO_UPLOAD);
            }
            res.status(201).send(ResponseMessage.UPLOADED_TO_CLOUD);
        },
    );

    return router;
};
