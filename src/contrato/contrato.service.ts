import { Injectable } from '@nestjs/common';
import { CreateContratoDto } from './dto/create-contrato.dto';
import { UpdateContratoDto } from './dto/update-contrato.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contrato } from './entities/contrato.entity';
import { Secretaria } from 'src/secretaria/entities/secretaria.entity';

@Injectable()
export class ContratoService {

  constructor(
    @InjectRepository(Contrato) private readonly contratoRepository: Repository<Contrato>,
    @InjectRepository(Secretaria) private readonly secretariaRepository: Repository<Secretaria>,
  ) { }

  async create(createContratoDto: CreateContratoDto): Promise<Contrato> {
    // Busca a secretaria no banco
    const secretaria = await this.secretariaRepository.findOne({
      where: { id: createContratoDto.secretariaId },
    });

    // Se não existir, lança um erro
    if (!secretaria) {
      throw new Error('Secretaria não encontrada');
    }

    const contrato: Contrato = new Contrato();
    contrato.nome = createContratoDto.nome;
    contrato.data = createContratoDto.data;
    contrato.status = createContratoDto.status;
    contrato.aprovado = createContratoDto.aprovado;
    contrato.itensQuantidade = createContratoDto.itensQuantidade;

    // Aqui já está garantido que secretaria não é null
    contrato.secretaria = secretaria;

    return await this.contratoRepository.save(contrato);
  }


  async findAll(): Promise<Contrato[]> {
    return await this.contratoRepository.find({ relations: ['secretaria','itens'] }); // opcional: já traz a secretaria
  }

  async findOne(id: string) {
    return await this.contratoRepository.findOne({ 
      where: { id },
      relations: ['secretaria','itens']
    });
  }

  async update(id: string, updateContratoDto: UpdateContratoDto): Promise<Contrato> {
    const contrato = await this.contratoRepository.findOne({ where: { id } });
    if(!contrato){
      throw new Error('Contrato não encontrado');
    }
    Object.assign(contrato, updateContratoDto);
    return await this.contratoRepository.save(contrato);
  }

  remove(id: string) {
    return this.contratoRepository.delete({ id });
  }
}
