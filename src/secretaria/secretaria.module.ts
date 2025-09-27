import { Module } from '@nestjs/common';
import { SecretariaService } from './secretaria.service';
import { SecretariaController } from './secretaria.controller';
import { Secretaria } from './entities/secretaria.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Secretaria])],
  controllers: [SecretariaController],
  providers: [SecretariaService],
  exports: [TypeOrmModule],
})
export class SecretariaModule {}
