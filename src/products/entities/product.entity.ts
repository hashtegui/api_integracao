import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

export interface ProductProps {
  product_id?: number;
  description: string;
  codbarras: number;
  createdAt: string;
}

@Entity({ name: 'PCPRODUT' })
export class Product implements ProductProps {
  constructor(private props: Product) {
    Object.assign(this, props);
  }

  @PrimaryGeneratedColumn('increment', { name: 'CODPROD' })
  @Index({ unique: true })
  product_id?: number;
  @Column({ name: 'DESCRICAO', length: 40 })
  description: string;
  @Column({ name: 'CODAUXILIAR' })
  codbarras: number;
  @Column({ name: 'EMBALAGEM', length: 12 })
  embalagem: string;
  @Column({ name: 'DTCADASTRO', type: 'date' })
  createdAt: string;
  @Column({ name: 'DTEXCLUSAO', nullable: true })
  excludedAt: string;
  @Column({ name: 'DTULTALTER', nullable: true })
  lastModification: string;
  @Column({ name: 'CODEPTO', nullable: false })
  idDep: number;
  @Column({ name: 'CODSEC', nullable: false })
  idSec: number;
  @Column({ name: 'CODCATEGORIA', nullable: false })
  idCat: number;
  @Column({ name: 'CODFORNEC', nullable: false })
  fornec_id: number;
}
