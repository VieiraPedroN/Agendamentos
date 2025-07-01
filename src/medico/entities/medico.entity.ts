import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Medico {
  @PrimaryGeneratedColumn()
  medico_id: number;

  @Column()
  medico_nome: string;

  @Column()
  medico_telefone: string;

  @Column()
  medico_email: string;

  @Column({ nullable: true })
  medico_especialidade: string;

  @Column({ nullable: true })
  medico_crm: string;
}
