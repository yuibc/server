import { Repository } from 'typeorm';
import { AppDataSource } from '../data-source';
import { Receipt } from '../entity';

export const receiptRepository: Repository<Receipt> =
    AppDataSource.getRepository(Receipt);
