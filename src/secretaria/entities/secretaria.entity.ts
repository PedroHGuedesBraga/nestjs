// secretaria.entity.ts
import { Column, Entity, PrimaryGeneratedColumn, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { Contrato } from '../../contrato/entities/contrato.entity';
import { Gerente } from 'src/gerente/entities/gerente.entity';

@Entity()
export class Secretaria {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  nome: string;

  @OneToMany(() => Contrato, (contrato) => contrato.secretaria)
  contratos: Contrato[];

  // Relacionamento opcional com gerente
  @OneToOne(() => Gerente, (gerente) => gerente.secretaria, { nullable: true, cascade: true })
  @JoinColumn()
  gerente?: Gerente;
}
