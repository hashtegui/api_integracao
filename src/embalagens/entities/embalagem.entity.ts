import { Estoque } from 'src/estoque/entities/estoque.entity';
import { Preco } from 'src/precos/entities/preco.entity';
import { Product } from 'src/products/entities/product.entity';
import {
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';

export interface EmbalagemProps {
  product_id: number;
  codbarras: number;
  filial_id: number;
}
@Entity({ name: 'PCEMBALAGEM' })
export class Embalagem implements EmbalagemProps {
  constructor(private props: EmbalagemProps) {
    Object.assign(this, props);
  }

  @PrimaryColumn({ name: 'CODPROD' })
  product_id: number;
  @PrimaryColumn({ name: 'CODAUXILIAR' })
  codbarras: number;
  @PrimaryColumn({ name: 'CODFILIAL' })
  filial_id: number;

  @OneToOne(() => Estoque, (emb) => emb.embalagem)
  @JoinColumn({ name: 'CODPROD' })
  estoque: Estoque;

  @OneToOne(() => Preco, (preco) => preco.embalagem.product_id)
  @JoinColumn({ name: 'CODPROD' })
  preco: Preco;

  @ManyToOne(() => Product, (prod) => prod.embalagens)
  @JoinColumn({ name: 'CODPROD' })
  produto: Product;
}
