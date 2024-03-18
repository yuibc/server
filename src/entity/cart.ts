import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Artwork, User } from '.';

@Entity()
export class Cart {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Artwork, (artwork) => artwork.carts)
    artwork: Artwork;

    @ManyToOne(() => User, (user) => user.carts)
    user: User;

    @Column()
    createdAt: Date;
}
