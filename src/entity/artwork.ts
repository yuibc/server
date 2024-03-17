import {
    Column,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Cart, NFT, Category, User } from '.';

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

    @Column()
    cryptoPrice: number;

    @Column()
    convertedPrice: number;

    @Column()
    currency: string;

    @ManyToOne(() => User, (user) => user.artworks)
    user: User;

    @ManyToOne(() => Category, (category) => category.artworks)
    category: Category;

    @OneToMany(() => Cart, (cart) => cart.artwork)
    carts: Cart[];

    @OneToMany(() => NFT, (nft) => nft.artwork)
    nfts: NFT[];

    @Column()
    published: boolean;

    @Column()
    createdAt: Date;
}
