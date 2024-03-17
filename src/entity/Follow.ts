import {
    BaseEntity,
    Column,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    Timestamp,
} from 'typeorm';
import { User } from './User';

@Entity()
export class Follow extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, (user) => user.follows)
    user: User;

    @ManyToOne(() => User, (user) => user.followUsers)
    followingUser: User;

    @Column()
    createdAt: Timestamp;
}
