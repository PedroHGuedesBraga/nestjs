import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './entities/item.entity';
import { ItemService } from './item.service';
import { ItemController } from './item.controller';
import { ContratoModule } from 'src/contrato/contrato.module';

@Module({
  imports: [TypeOrmModule.forFeature([Item]),
  ContratoModule  ], // <<< Registra a entidade
  controllers: [ItemController],
  providers: [ItemService],
})
export class ItemModule {}
