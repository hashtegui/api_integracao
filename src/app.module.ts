import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './users/entities/user.entity';
import { GroupsModule } from './groups/groups.module';
import { GroupEntity } from './groups/entities/group.entity';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './src/database/db.sqlite3',
      synchronize: true,
      //entities: ['./src/**/entities/**.entity.ts'],
      entities: [UserEntity, GroupEntity],
      logging: true,
    }),
    GroupsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
