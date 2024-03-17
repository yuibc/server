import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '.';

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    comment: string;

    @ManyToOne(() => User, (user) => user.comments)
    user: User;

    @Column()
    commentParent: Comment;

    @Column()
    createdAt: Date;
}
