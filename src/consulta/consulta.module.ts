import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Consulta } from './entities/consulta.entity';
import { ConsultaController } from './consulta.controller';
import { ConsultaService } from './consulta.service';

@Module({
  imports: [TypeOrmModule.forFeature([Consulta])],
  controllers: [ConsultaController],
  providers: [ConsultaService],
})
export class ConsultaModule {}
