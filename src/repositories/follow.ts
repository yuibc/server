import { Repository } from 'typeorm';
import { AppDataSource } from '../data-source';
import { Follow } from '../entity';

export const followRepository: Repository<Follow> =
    AppDataSource.getRepository(Follow);
