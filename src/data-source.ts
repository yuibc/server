import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { TARGET_DATABASE, SUPABASE_CONNECTION_STRING } from './config';
import {
    Artwork,
    Cart,
    Category,
    Comment,
    Feedback,
    Follow,
    User,
} from './entity';

export const AppDataSource = new DataSource({
    type: 'postgres',
    url: SUPABASE_CONNECTION_STRING,
    database: TARGET_DATABASE,
    synchronize: true,
    logging: false,
    entities: [User, Artwork, Category, Cart, Comment, Feedback, Follow],
    migrations: [],
    subscribers: [],
});
