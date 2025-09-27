import { IsOptional, IsString, IsInt, IsBoolean, IsDate } from 'class-validator';

export class UpdateItemDto {
  @IsOptional()
  @IsString()
  nome?: string;

  @IsOptional()
  @IsString()
  descricao?: string;

  @IsOptional()
  @IsInt()
  quantidadeItem?: number;

  @IsOptional()
  @IsInt()
  precoUnitario?: number;

  @IsOptional()
  @IsDate()
  data?: Date;

  @IsOptional()
  @IsString()
  status?: string;

  @IsOptional()
  @IsString()
  unidadeDeMedida?: string;

  @IsOptional()
  @IsBoolean()
  aprovado?: boolean;
}
