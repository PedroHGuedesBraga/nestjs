import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSecretariaDto } from './dto/create-secretaria.dto';
import { UpdateSecretariaDto } from './dto/update-secretaria.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Secretaria } from './entities/secretaria.entity';

@Injectable()
export class SecretariaService {
  constructor(
    @InjectRepository(Secretaria)
    private readonly secretariaRepository: Repository<Secretaria>,
  ) {}

  async create(createSecretariaDto: CreateSecretariaDto): Promise<Secretaria> {
    const secretaria: Secretaria = new Secretaria();
    secretaria.nome = createSecretariaDto.nome;
    return await this.secretariaRepository.save(secretaria);
  }

  async findAll(): Promise<Secretaria[]> {
    return await this.secretariaRepository.find({
      relations: ['contratos', 'contratos.itens'],
    });
  }

  async findOne(id: string) {
    const secretaria = await this.secretariaRepository.findOne({
      where: { id },
      relations: ['contratos', 'contratos.itens'],
    });
    if (!secretaria) {
      throw new NotFoundException(`Secretaria com id ${id} não encontrada`);
    }
    return secretaria;
  }

  async update(id: string, updateSecretariaDto: UpdateSecretariaDto) {
    const secretaria = await this.secretariaRepository.findOneBy({ id });
    if (!secretaria) {
      throw new NotFoundException(`Secretaria com id ${id} não encontrada`);
    }
    Object.assign(secretaria, updateSecretariaDto);
    return await this.secretariaRepository.save(secretaria);
  }

  async remove(id: string) {
    const secretaria = await this.secretariaRepository.findOneBy({ id });
    if (!secretaria) {
      throw new NotFoundException(`Secretaria com id ${id} não encontrada`);
    }

    await this.secretariaRepository.delete({ id });
    return { deleted: true, id };
  }
}
