import {
    Column,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Cart, User } from '.';

@Entity()
export class Artwork {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    url: string;

    @Column({ type: 'float' })
    cryptoPrice: number;

    @Column({ type: 'float' })
    convertedPrice: number;

    @Column()
    currency: string;

    @ManyToOne(() => User, (user) => user.artworks)
    user: User;

    @OneToMany(() => Cart, (cart) => cart.artwork)
    carts: Cart[];

    @Column()
    published: boolean;

    @Column()
    createdAt: Date;
}
