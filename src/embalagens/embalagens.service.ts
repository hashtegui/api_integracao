import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Embalagem } from './entities/embalagem.entity';

@Injectable()
export class EmbalagensService {
  constructor(
    @InjectRepository(Embalagem, 'test') private repo: Repository<Embalagem>,
  ) {}

  findOne(id: number): Promise<Embalagem[]> {
    const embalagens = this.repo.find({
      where: {
        product_id: id,
      },
    });
    return embalagens;
  }

  findEmbalagemPorFilial(
    product_id: number,
    filial_id: number,
  ): Promise<Embalagem[]> {
    const embalagens = this.repo.find({
      relations: {
        estoque: true,
      },
      where: {
        product_id: product_id,
        filial_id: filial_id,
        estoque: { filial_id: filial_id },
      },
    });
    return embalagens;
  }

  pesquisarPorCodBarrasEFilial(
    codbarras: number,
    filial_id: number,
  ): Promise<Embalagem> {
    const embalagem = this.repo.findOne({
      relations: ['estoque'],
      where: {
        codbarras: codbarras,
        filial_id: filial_id,
        estoque: { filial_id: filial_id },
      },
    });
    return embalagem;
  }
}
