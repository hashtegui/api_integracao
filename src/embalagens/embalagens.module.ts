import { Module } from '@nestjs/common';
import { EmbalagensService } from './embalagens.service';
import { EmbalagensController } from './embalagens.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Embalagem } from './entities/embalagem.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Embalagem], 'test')],
  controllers: [EmbalagensController],
  providers: [EmbalagensService],
})
export class EmbalagensModule {}
