import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Consulta } from './entities/consulta.entity';
import { CreateConsultaDto } from './dto/create-consulta.dto';
import { UpdateConsultaDto } from './dto/update-consulta.dto';

@Injectable()
export class ConsultaService {
  constructor(
    @InjectRepository(Consulta)
    private readonly consultaRepository: Repository<Consulta>,
  ) {}

  create(createConsultaDto: CreateConsultaDto): Promise<Consulta> {
    const consulta = this.consultaRepository.create(createConsultaDto);
    return this.consultaRepository.save(consulta);
  }

  findAll(): Promise<Consulta[]> {
    return this.consultaRepository.find();
  }

  async findOne(id: number): Promise<Consulta> {
    const consulta = await this.consultaRepository.findOneBy({
      consulta_id: id,
    });
    if (!consulta) {
      throw new NotFoundException(`Consulta com ID ${id} não encontrada`);
    }
    return consulta;
  }

  async update(
    id: number,
    updateConsultaDto: UpdateConsultaDto,
  ): Promise<Consulta> {
    await this.consultaRepository.update(id, updateConsultaDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const result = await this.consultaRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Consulta com ID ${id} não encontrada`);
    }
  }
}
