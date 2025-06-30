export class CreateUsuarioDto {
  nome: string;
  email: string;
  senha: string;
  tipo: 'medico' | 'paciente';
  relacionado_id: number;
}
