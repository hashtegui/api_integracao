import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Preco } from './entities/preco.entity';
import { PrecosController } from './precos.controller';
import { PrecosService } from './precos.service';

@Module({
  imports: [TypeOrmModule.forFeature([Preco], 'test')],
  controllers: [PrecosController],
  providers: [PrecosService],
})
export class PrecosModule {}
