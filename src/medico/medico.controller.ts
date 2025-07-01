import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateMedicoDto } from './dto/create-medico.dto';
import { MedicoService } from './medico.service';
import { UpdateMedicoDto } from './dto/update-medico.dto';
@Controller('medico')
export class MedicoController {
  constructor(private readonly medicoService: MedicoService) {}

  @Post()
  create(@Body() dto: CreateMedicoDto) {
    return this.medicoService.create(dto);
  }

  @Get()
  findAll() {
    return this.medicoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.medicoService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateMedicoDto) {
    return this.medicoService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.medicoService.remove(+id);
  }
}
