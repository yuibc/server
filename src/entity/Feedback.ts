import { Column, Entity, PrimaryGeneratedColumn, Timestamp } from 'typeorm';

@Entity()
export class Feedback {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    content: string;

    @Column()
    sentAt: Timestamp;
}
