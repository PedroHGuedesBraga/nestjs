import { IsString } from "class-validator";

export class CreateGerenteDto {
    
    
    @IsString()
    nome: string;
        
    @IsString()
    cpf: string;
    
    @IsString()
    email: string;
      
    @IsString()
    password: string;
      
    @IsString()
    secretaria: string;
}
