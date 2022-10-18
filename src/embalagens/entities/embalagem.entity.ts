import { Estoque } from 'src/estoque/entities/estoque.entity';
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
}
