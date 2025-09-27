import { IsString} from 'class-validator';
export class CreateSecretariaDto {
    @IsString()
    nome:string

    @IsString()
    contrato:string

    


}
