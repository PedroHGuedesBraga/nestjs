import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemModule } from './item/item.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './item/entities/item.entity';
import { ContratoModule } from './contrato/contrato.module';
import { Contrato } from './contrato/entities/contrato.entity';
import { SecretariaModule } from './secretaria/secretaria.module';
import { Secretaria } from './secretaria/entities/secretaria.entity';
import { GerenteModule } from './gerente/gerente.module';
import { Gerente } from './gerente/entities/gerente.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'user',
      password: '1010',
      database: 'mydatabase',
      entities: [Item, Contrato, Secretaria,Gerente], // <<< apenas aqui
      synchronize: true,
      logging: true,
    }),
    ItemModule,
    ContratoModule,
    SecretariaModule,
    GerenteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
