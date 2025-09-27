import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from './entities/item.entity';
import { Contrato } from 'src/contrato/entities/contrato.entity';
@Injectable()
export class ItemService {

  constructor(
    @InjectRepository(Item) private readonly itemRepository: Repository<Item>,
    @InjectRepository(Contrato) private readonly contratoRepository: Repository<Contrato>,
  ) { }

  async create(createItemDto: CreateItemDto): Promise<Item> {
    // Busca o contrato
    const contrato = await this.contratoRepository.findOne({
      where: { id: createItemDto.contratoId },
    });

    if (!contrato) {
      throw new Error('Contrato não encontrado');
    }

    // Cria o item e associa ao contrato
    const item = this.itemRepository.create({
      ...createItemDto,
      contrato,
    });

    return await this.itemRepository.save(item);
  }

  async findAll(): Promise<Item[]> {
    return await this.itemRepository.find({ relations: ['contrato'] });
  }

  async findOne(id: string): Promise<Item> {
    const item = await this.itemRepository.findOne({
      where: { id },
      relations: ['contrato'],
    });

    if (!item) {
      throw new Error('Item não encontrado');
    }

    return item;
  }


  async update(id: string, updateItemDto: UpdateItemDto): Promise<Item> {
    const item = await this.itemRepository.findOne({ where: { id } });
    if (!item) {
      throw new Error('Item não encontrado');
    }

    Object.assign(item, updateItemDto);
    return this.itemRepository.save(item);
  }

  remove(id: string) {
    return this.itemRepository.delete({ id })
  }
}
