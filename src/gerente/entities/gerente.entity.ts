import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
  
  @Column({ type: 'varchar' })
  secretaria: string;

}
