import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
  ) {}

  create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    const novoUsuario = this.usuarioRepository.create(createUsuarioDto);
    return this.usuarioRepository.save(novoUsuario);
  }

  findAll(): Promise<Usuario[]> {
    return this.usuarioRepository.find();
  }

  findOne(id: number): Promise<Usuario | null> {
    return this.usuarioRepository.findOneBy({ usuario_id: id });
  }
  async update(id: number, dto: UpdateUsuarioDto): Promise<Usuario> {
    await this.usuarioRepository.update(id, dto);
    const usuarioAtualizado = await this.findOne(id);
    if (!usuarioAtualizado) {
      throw new Error(`Usuário com ID ${id} não encontrado`);
    }
    return usuarioAtualizado;
  }

  async remove(id: number): Promise<void> {
    await this.usuarioRepository.delete(id);
  }
}
