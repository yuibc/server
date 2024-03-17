import { Repository } from 'typeorm';
import { AppDataSource } from '../data-source';
import { User } from '../entity';

export const userRepository: Repository<User> =
    AppDataSource.getRepository(User);
