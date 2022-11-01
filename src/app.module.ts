import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './users/entities/user.entity';
import { GroupsModule } from './groups/groups.module';
import { GroupEntity } from './groups/entities/group.entity';
import { Product } from './products/entities/product.entity';
import { ProductsModule } from './products/products.module';
import { EmbalagensModule } from './embalagens/embalagens.module';
import { Embalagem } from './embalagens/entities/embalagem.entity';
import { EstoqueModule } from './estoque/estoque.module';
import { Estoque } from './estoque/entities/estoque.entity';
import { EmprsModule } from './emprs/emprs.module';
import { Empr } from './emprs/entities/empr.entity';
import { PrecosModule } from './precos/precos.module';
import { Preco } from './precos/entities/preco.entity';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'oracle',
      host: '192.168.0.165',
      port: 1521,
      serviceName: 'bdteste',
      username: 'teste',
      password: 'testekzt01',
      synchronize: false,
      name: 'test',
      //entities: ['./src/**/entities/**.entity.ts'],
      entities: [Product, Embalagem, Estoque, Empr, Preco],
      logging: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '192.168.0.25',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'empr',
      entities: [GroupEntity, UserEntity],
      synchronize: true,
      logging: true,
    }),
    GroupsModule,
    ProductsModule,
    EmbalagensModule,
    EstoqueModule,
    EmprsModule,
    PrecosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
