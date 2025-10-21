import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Contrato } from '../../contrato/entities/contrato.entity';

@Entity()
export class Item {
 
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  nome: string;

  @Column({ type: 'varchar' })
  descricao: string;

  @Column({ type: 'int' })
  quantidadeItem: number;

  @Column({ type: 'decimal' })
  precoUnitario: number;

  @Column({ type: 'date' })
  data: Date;

  @Column({ type: 'varchar' })
  unidadeDeMedida: string;
  
  @Column({ type: 'bool' })
  aprovado: boolean;
  
  @ManyToOne(() => Contrato, (contrato) => contrato.itens, { onDelete: 'CASCADE' })
  contrato: Contrato;
  

}

