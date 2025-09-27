import { Injectable } from '@nestjs/common';
import { CreateGerenteDto } from './dto/create-gerente.dto';
import { UpdateGerenteDto } from './dto/update-gerente.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Gerente } from './entities/gerente.entity';
import { Repository } from 'typeorm';
@Injectable()
export class GerenteService {
  constructor(
    @InjectRepository(Gerente) private readonly gerenteRepository:Repository<Gerente>,
  ){}
  async create(createGerenteDto: CreateGerenteDto):Promise<Gerente> {
    const gerente: Gerente = new Gerente();
    gerente.cpf = createGerenteDto.cpf;
    gerente.email = createGerenteDto.email;
    gerente.nome = createGerenteDto.nome;
    gerente.password = createGerenteDto.password
    gerente.secretaria = createGerenteDto.secretaria

    return await this.gerenteRepository.save(gerente);
  }

  async findAll():Promise<Gerente[]> {
    return await this.gerenteRepository.find();
  }

  async findOne(id: string) {
    return this.gerenteRepository.findOneBy({id});
  }

 async update(id: string, updateGerenteDto: UpdateGerenteDto) {
     const gerente = await this.gerenteRepository.findOneBy({id})
     if(!gerente){
       throw new Error("gerente não encontrada")
     } 
     Object.assign(gerente, updateGerenteDto);
     return await this.gerenteRepository.save(gerente);
   }

  remove(id: string) {
    return this.gerenteRepository.delete({id}); }
}
