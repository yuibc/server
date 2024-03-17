import {
    Column,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    Timestamp,
} from 'typeorm';
import { Artwork } from './Artwork';

@Entity()
export class NFT {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    token: string;

    @ManyToOne(() => Artwork, (artwork) => artwork.nfts)
    artwork: Artwork;

    @Column()
    createdAt: Timestamp;
}
