import { AppDataSource } from './data-source';
import express, { Express } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import {
    ArtworkProvider,
    AuthProvider,
    CartProvider,
    CategoryProvider,
    CommentProvider,
    FeedbackProvider,
    FollowProvider,
    NFTProvider,
    UserProvider,
} from './providers';

function main() {
    dotenv.config();
    const app: Express = express();
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
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
            app.use(NFTProvider(router));
            app.use(FeedbackProvider(router));
            app.listen(4000, () =>
                console.log('Server initializing at port: 4000'),
            );
        })
        .catch((error) => console.log(error));
}

main();
