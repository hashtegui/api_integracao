import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Preco } from './entities/preco.entity';

@Injectable()
export class PrecosService {
  constructor(
    @InjectRepository(Preco, 'test') private readonly repo: Repository<Preco>,
  ) {}

  getAllPrices(numregiao: number): Promise<Preco[]> {
    return this.repo.find({ where: { numregiao: numregiao } });
  }
}
