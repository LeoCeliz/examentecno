import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Vargas extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nitProveedor: number;

    @Column()
    razonsocialProveedor: string;

    @Column()
    nroFactura: number;

    @Column()
    nroAutorizacion: number;

    @Column()
    codigoControl: number;
}