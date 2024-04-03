import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user';
import { Artwork } from './artwork';
import { OwningStatus } from '../enums';

@Entity()
export class Receipt {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, (user) => user.receipts)
    payer: User;

    @ManyToOne(() => Artwork, (artwork) => artwork.receipts)
    artwork: Artwork;

    @Column()
    purchasedAt: Date;

    @Column()
    status: OwningStatus;

    @Column()
    transaction: string;
}
