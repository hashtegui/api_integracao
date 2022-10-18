import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Estoque } from './entities/estoque.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Estoque], 'test')],
})
export class EstoqueModule {}
