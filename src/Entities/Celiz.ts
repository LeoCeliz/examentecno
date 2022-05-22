import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Celiz extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fecha: string;

    @Column()
    conceptoCtaContable: string;

    @Column()
    glosa: string;

    @Column()
    centroCostos: string;

    @Column()
    totalFactura: number;

    @Column()
    importesExentos: number;

    @Column()
    subTotal: number;

    @Column()
    desc: number;

    @Column()
    importeBaseIva: number;

    
    @Column()
    creditoFiscalIva: number;

    
    @Column()
    totalsinIva: number;

    
    @Column()
    totalBs: number;

    
    @Column()
    tipo: string;

    
    @Column()
    estado: boolean;

    
    @Column()
    concurrencia: number;
}