import { IsString} from 'class-validator';
export class CreateSecretariaDto {
    @IsString()
    nome:string

    @IsString()
    gerente:string

    @IsString()
    contrato:string

    


}
