import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Consulta {
  @PrimaryGeneratedColumn()
  consulta_id: number;

  @Column()
  paciente_id: number;

  @Column()
  medico_id: number;

  @Column({ type: 'date' })
  consulta_data: string;

  @Column({ type: 'time with time zone' })
  consulta_hora_inicio: string;

  @Column({ type: 'time with time zone' })
  consulta_hora_fim: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  consulta_observacoes?: string;

  @Column()
  status_id: number;
}
