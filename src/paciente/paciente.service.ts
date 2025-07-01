import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Paciente } from './entities/paciente.entity';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';

@Injectable()
export class PacienteService {
  constructor(
    @InjectRepository(Paciente)
    private pacienteRepository: Repository<Paciente>,
  ) {}

  create(createPacienteDto: CreatePacienteDto): Promise<Paciente> {
    const novoPaciente = this.pacienteRepository.create(createPacienteDto);
    return this.pacienteRepository.save(novoPaciente);
  }

  findAll(): Promise<Paciente[]> {
    return this.pacienteRepository.find();
  }

  findOne(id: number): Promise<Paciente | null> {
    return this.pacienteRepository.findOneBy({ paciente_id: id });
  }

  async update(id: number, dto: UpdatePacienteDto): Promise<Paciente> {
    await this.pacienteRepository.update(id, dto);
    const pacienteAtualizado = await this.findOne(id);
    if (!pacienteAtualizado) {
      throw new NotFoundException(`Paciente com ID ${id} não encontrado`);
    }
    return pacienteAtualizado;
  }

  async remove(id: number): Promise<void> {
    await this.pacienteRepository.delete(id);
  }
}
