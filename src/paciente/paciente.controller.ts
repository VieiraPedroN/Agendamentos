import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { PacienteService } from './paciente.service';
import { UpdatePacienteDto } from './dto/update-paciente.dto';

@Controller('paciente')
export class PacienteController {
  constructor(private readonly pacienteService: PacienteService) {}

  @Post()
  create(@Body() dto: CreatePacienteDto) {
    return this.pacienteService.create(dto);
  }

  @Get()
  findAll() {
    return this.pacienteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pacienteService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdatePacienteDto) {
    return this.pacienteService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pacienteService.remove(+id);
  }
}
