import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany  } from 'typeorm';
import { Secretaria } from '../../secretaria/entities/secretaria.entity';
import { Item } from '../../item/entities/item.entity';

@Entity()
export class Contrato {
 
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  nome: string;

  @Column({ type: 'date' })
  data: Date;

  @Column({ type: 'varchar' })
  status: string;
  
  @Column({ type: 'bool' })
  aprovado: boolean;
 
  @Column({ type: 'int' })
  itensQuantidade: number;

  @ManyToOne(() => Secretaria, (secretaria) => secretaria.contratos, { onDelete: 'CASCADE' })
  secretaria: Secretaria;  // ⬅ aqui
  
  @OneToMany(() => Item, (item) => item.contrato)
  itens: Item[];
  
}

