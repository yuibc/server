import { AppDataSource } from './data-source';
import express, { Express } from 'express';
import dotenv from 'dotenv';

function main() {
    dotenv.config();
    const app: Express = express();
    AppDataSource.initialize()
        .then(async () => {
            app.listen(4000, () =>
                console.log('Server initializing at port: 4000'),
            );
        })
        .catch((error) => console.log(error));
}

main();
