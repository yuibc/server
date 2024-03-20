import { Repository } from 'typeorm';
import { AppDataSource } from '../data-source';
import { Feedback } from '../entity';

export const feedbackRepository: Repository<Feedback> =
    AppDataSource.getRepository(Feedback);
