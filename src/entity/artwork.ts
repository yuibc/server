import {
    Column,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Cart, Receipt, User } from '.';
import { Instruction } from '@metaplex-foundation/umi';

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
    cid: string;

    @Column()
    metadata: string;

    @Column({ type: 'float' })
    cryptoPrice: number;

    @Column()
    currency: string;

    @ManyToOne(() => User, (user) => user.artworks)
    user: User;

    @OneToMany(() => Cart, (cart) => cart.artwork)
    carts: Cart[];

    @OneToMany(() => Receipt, (receipt) => receipt.artwork)
    receipts: Receipt[];

    @Column()
    published: boolean;

    @Column()
    createdAt: Date;

    @Column({ nullable: true, type: 'json' })
    instructions: Instruction[];

    @Column({ nullable: true })
    mint: string;
}
