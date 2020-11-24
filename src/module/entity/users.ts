import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Users {

    @PrimaryGeneratedColumn('uuid', {name:'id'})
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;
}