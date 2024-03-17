import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Feedback {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    content: string;

    @Column()
    sentAt: Date;
}
