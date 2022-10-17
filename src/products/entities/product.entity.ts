import { Column, Entity, PrimaryColumn } from 'typeorm';

export interface ProductProps {
  id: number;
  description: string;
  //codbarras: number;
}

@Entity({ name: 'PCPRODUT', synchronize: false })
export class Product implements ProductProps {
  @PrimaryColumn({ name: 'CODPROD' })
  id: number;
  @Column({ name: 'DESCRICAO' })
  description: string;
  @Column({ name: 'CODAUXILIAR' })
  codbarras: number;
}
