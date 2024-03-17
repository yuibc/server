import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Artwork } from '.';

@Entity()
export class NFT {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    token: string;

    @ManyToOne(() => Artwork, (artwork) => artwork.nfts)
    artwork: Artwork;

    @Column()
    createdAt: Date;
}
