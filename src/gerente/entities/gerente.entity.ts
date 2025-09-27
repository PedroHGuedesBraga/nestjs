import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Secretaria } from 'src/secretaria/entities/secretaria.entity';

@Entity()
export class Gerente {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  nome: string;

  @Column({ type: 'varchar' })
  cpf: string;

  @Column({ type: 'varchar' })
  email: string;

  @Column({ type: 'varchar' })
  password: string;

  @OneToOne(() => Secretaria)
  @JoinColumn()
  secretaria: Secretaria;
}
