// src/paciente/entities/paciente.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Paciente {
  @PrimaryGeneratedColumn()
  paciente_id: number;

  @Column()
  paciente_nome: string;

  @Column()
  paciente_telefone: string;

  @Column()
  paciente_email: string;

  @Column({ nullable: true })
  paciente_diagnostico: string;

  @Column({ nullable: true })
  paciente_registro: string;
}
