import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { OneToMany } from 'typeorm';
import { Contrato } from '../../contrato/entities/contrato.entity'

@Entity()
export class Secretaria {
 
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  nome: string;
  
//Uma Secretaria Vai te um e somente uma secretaria    
  @Column({ type: 'varchar' })
  gerente: string;

  
  @OneToMany(() => Contrato, (contrato) => contrato.secretaria)
  contratos: Contrato[];

  

}

