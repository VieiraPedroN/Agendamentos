export class CreateConsultaDto {
  paciente_id: number;
  medico_id: number;
  consulta_data: string;
  consulta_hora_inicio: string;
  consulta_hora_fim: string;
  consulta_observacoes?: string;
  status_id: number;
}
