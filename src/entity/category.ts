import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Artwork } from '.';

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    display: string;

    @ManyToOne(() => Artwork, (artwork) => artwork.category)
    artworks: Artwork[];

    @Column()
    createdAt: Date;
}
