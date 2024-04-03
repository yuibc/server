import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Artwork, Cart, Comment, Follow, Receipt } from '.';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    email: string;

    @Column()
    displayName: string;

    @Column({ nullable: true })
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

    @OneToMany(() => Receipt, (receipt) => receipt.payer)
    receipts: Receipt[];

    @OneToMany(() => Cart, (cart) => cart.user)
    carts: Cart[];
}
