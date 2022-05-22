import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Armin extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    razonsocialProveedor: string;

    @Column()
    nroRecibo: number;

    @Column()
    glosa: string;

   
}