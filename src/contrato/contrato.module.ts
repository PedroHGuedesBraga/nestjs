import { Module } from '@nestjs/common';
import { ContratoService } from './contrato.service';
import { ContratoController } from './contrato.controller';
import { Contrato } from './entities/contrato.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Secretaria } from 'src/secretaria/entities/secretaria.entity';
@Module({
  imports:[TypeOrmModule.forFeature([Contrato, Secretaria])],
  exports: [TypeOrmModule, ContratoService],
  controllers: [ContratoController],
  providers: [ContratoService],
})
export class ContratoModule {}
