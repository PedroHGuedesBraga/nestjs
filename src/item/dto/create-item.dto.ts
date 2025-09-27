import { IsString, IsInt, IsBoolean, IsDate } from 'class-validator';

export class CreateItemDto {
  @IsString()
  nome: string;

  @IsString()
  descricao: string;

  @IsInt()
  quantidadeItem: number;

  @IsInt()
  precoUnitario: number;

  @IsDate()
  data: Date;

  @IsString()
  contratoId: string;

  @IsString()
  unidadeDeMedida: string;

  @IsBoolean()
  aprovado: boolean;
}
