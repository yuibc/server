import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Artwork, Cart, Comment, Follow } from '.';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    displayName: string;

    @Column()
    password: string;

    @Column()
    walletAddress: string;

    @Column()
    isAdmin: boolean;

    @Column()
    createdAt: Date;

    @OneToMany(() => Artwork, (artwork) => artwork.user)
    artworks: Artwork[];

    @OneToMany(() => Follow, (follow) => follow.user)
    follows: Follow[];

    @OneToMany(() => Follow, (follow) => follow.followingUser)
    followUsers: Follow[];

    @OneToMany(() => Comment, (comment) => comment.user)
    comments: Comment[];

    @OneToMany(() => Cart, (cart) => cart.user)
    carts: Cart[];
}
