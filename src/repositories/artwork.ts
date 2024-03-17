import { Repository } from 'typeorm';
import { AppDataSource } from '../data-source';
import { Artwork } from '../entity';

export const artworkRepository: Repository<Artwork> =
    AppDataSource.getRepository(Artwork);
