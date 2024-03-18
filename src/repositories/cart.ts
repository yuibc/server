import { Repository } from 'typeorm';
import { AppDataSource } from '../data-source';
import { Cart } from '../entity';

export const cartRepository: Repository<Cart> =
    AppDataSource.getRepository(Cart);
