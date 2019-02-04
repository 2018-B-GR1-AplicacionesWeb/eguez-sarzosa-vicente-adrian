// usuario.entity.ts

import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('usuario')
export class UsuarioEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column({
        type: 'date'
    })
    fecha: Date;

    @Column()
    tipo: string;

}