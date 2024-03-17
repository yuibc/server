import {
    Column,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    Timestamp,
} from 'typeorm';
import { Artwork } from '.';

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    display: string;

    @Column()
    createdAt: Timestamp;

    @ManyToOne(() => Artwork, (artwork) => artwork.category)
    artworks: Artwork[];
}
