import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Users {

    @PrimaryGeneratedColumn('uuid', {name:'id'})
    id: string;

    @Column()
    descricao: string;

    @Column()
    userId: string;

    @Column()
    status: string;

    @Column()
    data_inicio: Date;
}