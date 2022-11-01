import { Estoque } from 'src/estoque/entities/estoque.entity';
import { Preco } from 'src/precos/entities/preco.entity';
import { Entity, JoinColumn, OneToMany, PrimaryColumn } from 'typeorm';

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

  @OneToMany(() => Estoque, (emb) => emb.embalagem)
  @JoinColumn({ name: 'CODPROD' })
  estoque: Estoque[];

  @OneToMany(() => Preco, (preco) => preco.embalagem)
  @JoinColumn({ name: 'CODPROD' })
  preco: Preco[];
}
