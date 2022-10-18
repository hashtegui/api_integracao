import { Embalagem } from 'src/embalagens/entities/embalagem.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity({ name: 'PCEST' })
export class Estoque {
  @PrimaryColumn({ name: 'CODPROD' })
  product_id: number;
  @PrimaryColumn({ name: 'CODFILIAL' })
  filial_id: number;
  @Column({ name: 'QTEST' })
  qt_est: number;

  @ManyToOne(() => Embalagem)
  @JoinColumn({ name: 'CODPROD' })
  embalagem: Embalagem;
}
