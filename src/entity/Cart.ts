import {
    Column,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    Timestamp,
} from 'typeorm';
import { Artwork } from './Artwork';
import { User } from './User';

@Entity()
export class Cart {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Artwork, (artwork) => artwork.carts)
    artwork: Artwork;

    @ManyToOne(() => User, (user) => user.carts)
    user: User;

    @Column()
    createdAt: Timestamp;
}
