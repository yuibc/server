import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '.';

@Entity()
export class Follow {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, (user) => user.follows)
    user: User;

    @ManyToOne(() => User, (user) => user.followUsers)
    followingUser: User;

    @Column()
    createdAt: Date;
}
