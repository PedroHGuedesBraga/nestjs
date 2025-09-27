import { IsString, IsInt, IsBoolean, IsDate } from 'class-validator';

export class CreateContratoDto {
  @IsString()
  nome: string;
  
  @IsDate()
  data: Date;
  
  @IsString()
  status: string;

  @IsBoolean()
  aprovado: boolean;


  @IsString()
  secretariaId: string;

  @IsInt()
  itensQuantidade: number;
}
