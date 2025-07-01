import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Medico } from './entities/medico.entity';
import { CreateMedicoDto } from './dto/create-medico.dto';
import { UpdateMedicoDto } from './dto/update-medico.dto';
@Injectable()
export class MedicoService {
  constructor(
    @InjectRepository(Medico)
    private medicoRepository: Repository<Medico>,
  ) {}

  create(createMedicoDto: CreateMedicoDto): Promise<Medico> {
    const novoMedico = this.medicoRepository.create(createMedicoDto);
    return this.medicoRepository.save(novoMedico);
  }

  findAll(): Promise<Medico[]> {
    return this.medicoRepository.find();
  }

  findOne(id: number): Promise<Medico | null> {
    return this.medicoRepository.findOneBy({ medico_id: id });
  }

  async update(id: number, dto: UpdateMedicoDto): Promise<Medico> {
    await this.medicoRepository.update(id, dto);
    const medicoAtualizado = await this.findOne(id);
    if (!medicoAtualizado) {
      throw new NotFoundException(`Médico com ID ${id} não encontrado`);
    }
    return medicoAtualizado;
  }

  async remove(id: number): Promise<void> {
    await this.medicoRepository.delete(id);
  }
}
