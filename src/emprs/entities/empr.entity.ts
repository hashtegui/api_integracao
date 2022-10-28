import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'PCEMPR', synchronize: false })
export class Empr {
  @PrimaryColumn({ name: 'MATRICULA' })
  matricula: number;
  @Column({ name: 'NOME' })
  nome: string;
  @Column({ name: 'ADMISSAO', type: 'date' })
  dtAdmissao: string;
  @Column({ name: 'CODSETOR' })
  codsetor: number;
  @Column({ name: 'NOME_GUERRA' })
  login: string;
  @Column({ name: 'SENHABD' })
  password: string;
}
