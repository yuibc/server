import { Repository } from 'typeorm';
import { AppDataSource } from '../data-source';
import { Comment } from '../entity';

export const commentRepository: Repository<Comment> =
    AppDataSource.getRepository(Comment);
