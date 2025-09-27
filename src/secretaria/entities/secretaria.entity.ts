import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { OneToMany } from 'typeorm';
import { Contrato } from '../../contrato/entities/contrato.entity'

@Entity()
export class Secretaria {
 
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  nome: string;
  
  
  @OneToMany(() => Contrato, (contrato) => contrato.secretaria)
  contratos: Contrato[];

  

}

