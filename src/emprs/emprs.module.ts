import { Module } from '@nestjs/common';
import { EmprsService } from './emprs.service';
import { EmprsController } from './emprs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Empr } from './entities/empr.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Empr], 'test')],
  controllers: [EmprsController],
  providers: [EmprsService],
})
export class EmprsModule {}
