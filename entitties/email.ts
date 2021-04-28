import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export default class Email {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: String;

    @Column({ nullable: false, default: false })
    sentMail: boolean;
}