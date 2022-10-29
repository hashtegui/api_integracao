import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'PCTABPR', synchronize: false })
export class Preco {
  @PrimaryColumn({ name: 'CODPROD' })
  codprod: number;
  @PrimaryColumn({ name: 'NUMREGIAO' })
  numregiao: number;
  @Column({ name: 'PTABELA', type: 'numeric', precision: 4, scale: 2 })
  ptabela: number;
  @Column({ name: 'PVENDA' })
  pvenda: number;
  @Column({ name: 'PTABELAATAC' })
  ptabelaatac: number;
  @Column({ name: 'PVENDAATAC' })
  pvendaatac: number;
}
