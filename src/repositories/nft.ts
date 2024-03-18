import { Repository } from 'typeorm';
import { AppDataSource } from '../data-source';
import { NFT } from '../entity';

export const NFTRepository: Repository<NFT> = AppDataSource.getRepository(NFT);
