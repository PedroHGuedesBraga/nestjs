import { Injectable } from '@nestjs/common';
import { CreateGerenteDto } from './dto/create-gerente.dto';
import { UpdateGerenteDto } from './dto/update-gerente.dto';
import { Gerente } from './entities/gerente.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Secretaria } from 'src/secretaria/entities/secretaria.entity';

@Injectable()
export class GerenteService {
  constructor(
    @InjectRepository(Gerente) private readonly gerenteRepository: Repository<Gerente>,
    @InjectRepository(Secretaria) private readonly secretariaRepository: Repository<Secretaria>,
  ) { }

  async create(createGerenteDto: CreateGerenteDto): Promise<Gerente> {
    const gerente: Gerente = new Gerente();
    gerente.nome = createGerenteDto.nome;
    gerente.cpf = createGerenteDto.cpf;
    gerente.email = createGerenteDto.email;
    gerente.password = createGerenteDto.password;

    if (createGerenteDto.secretaria) {
      const secretaria = await this.secretariaRepository.findOneBy({ id: createGerenteDto.secretaria });
      if (!secretaria) throw new Error('Secretaria não encontrada');
      gerente.secretaria = secretaria;
    }

    return await this.gerenteRepository.save(gerente);
  }

  async findAll(): Promise<Gerente[]> {
    return await this.gerenteRepository.find({ relations: ['secretaria'] });
  }

  async findOne(id: string) {
    return await this.gerenteRepository.findOne({
      where: { id },
      relations: ['secretaria'],
    });
  }


  async update(id: string, updateGerenteDto: UpdateGerenteDto) {
    const gerente = await this.gerenteRepository.findOneBy({ id })
    if (!gerente) {
      throw new Error("gerente não encontrada")
    }
    Object.assign(gerente, updateGerenteDto);
    return await this.gerenteRepository.save(gerente);
  }

  remove(id: string) {
    return this.gerenteRepository.delete({ id });
  }
}
