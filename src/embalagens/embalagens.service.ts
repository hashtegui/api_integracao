import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Embalagem } from './entities/embalagem.entity';

@Injectable()
export class EmbalagensService {
  constructor(
    @InjectRepository(Embalagem, 'test') private repo: Repository<Embalagem>,
  ) {}

  private retornaRegiao(filial: number) {
    let numregiao = 0;
    if (filial in [1, 5]) {
      numregiao = 1;
    } else if (filial in [2, 6]) {
      numregiao = 2;
    } else if (filial === 3) {
      numregiao = 3;
    }
    return numregiao;
  }

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
    const numRegiao = this.retornaRegiao(filial_id);
    const embalagem = this.repo.findOne({
      relations: ['estoque', 'preco', 'produto'],
      where: {
        codbarras: codbarras,
        filial_id: filial_id,
        estoque: { filial_id: filial_id },
        preco: { numregiao: numRegiao },
      },
    });
    return embalagem;
  }
}
