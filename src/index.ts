import { AppDataSource } from './data-source';
import express, { Express } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import fs from 'fs';
import {
    ArtworkProvider,
    AuthProvider,
    CartProvider,
    CategoryProvider,
    CommentProvider,
    FeedbackProvider,
    FollowProvider,
    UserProvider,
} from './providers';
import { FILE_UPLOAD_DEST } from './config';

function main() {
    dotenv.config();
    if (!fs.existsSync(FILE_UPLOAD_DEST)) fs.mkdirSync(FILE_UPLOAD_DEST);
    const app: Express = express();
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(
        cors({
            origin: 'http://localhost:3000',
        }),
    );
    AppDataSource.initialize()
        .then(async () => {
            const router = express.Router();
            app.use('/api/v1', router);
            app.use(AuthProvider(router));
            app.use(UserProvider(router));
            app.use(ArtworkProvider(router));
            app.use(CartProvider(router));
            app.use(CategoryProvider(router));
            app.use(FollowProvider(router));
            app.use(CommentProvider(router));
            app.use(FeedbackProvider(router));
            app.listen(4000, () =>
                console.log('Server initializing at port: 4000'),
            );
        })
        .catch((error) => console.log(error));
}

main();
