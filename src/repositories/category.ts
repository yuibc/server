import { Repository } from 'typeorm';
import { AppDataSource } from '../data-source';
import { Category } from '../entity';

export const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);
