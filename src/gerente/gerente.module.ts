import { Module } from '@nestjs/common';
import { GerenteService } from './gerente.service';
import { GerenteController } from './gerente.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gerente } from './entities/gerente.entity';
import { Secretaria } from 'src/secretaria/entities/secretaria.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Gerente, Secretaria])],
  controllers: [GerenteController],
  providers: [GerenteService],
  exports: [GerenteService],
})
export class GerenteModule {}
