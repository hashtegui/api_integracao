import { Column, Entity, PrimaryColumn } from 'typeorm';

export interface ProductProps {
  id: number;
  description: string;
  codbarras: number;
}

@Entity({ name: 'PCPRODUT', synchronize: false })
export class Product implements ProductProps {
  @PrimaryColumn({ name: 'CODPROD' })
  id: number;
  @Column({ name: 'DESCRICAO' })
  description: string;
  @Column({ name: 'CODAUXILIAR' })
  codbarras: number;
  @Column({ name: 'DTCADASTRO', type: 'date' })
  createdAt: string;
  @Column({ name: 'DTEXCLUSAO' })
  excludedAt: string;
  @Column({ name: 'DTULTALTER' })
  lastModification: string;
  @Column({ name: 'CODEPTO' })
  idDep: number;
  @Column({ name: 'CODSEC' })
  idSec: number;
  @Column({ name: 'CODCATEGORIA' })
  idCat: number;
}
