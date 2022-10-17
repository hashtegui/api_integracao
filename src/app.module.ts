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
      synchronize: true,
      name: 'test',
      //entities: ['./src/**/entities/**.entity.ts'],
      entities: [Product],
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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
