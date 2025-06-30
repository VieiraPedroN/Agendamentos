import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PacienteModule } from './paciente/paciente.module';
import { MedicoModule } from './medico/medico.module';
import { ConsultaModule } from './consulta/consulta.module';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'agendamentos',
      synchronize: true,
      autoLoadEntities: true,
    }),
    PacienteModule,
    MedicoModule,
    ConsultaModule,
    UsuarioModule,
  ],
})
export class AppModule {}
