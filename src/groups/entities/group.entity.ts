import { UserEntity } from 'src/users/entities/user.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

export interface Group {
  id?: number;
  description: string;
  local: string;
}
@Entity({ name: 'groups' })
export class GroupEntity implements Group {
  constructor(private props: Group) {
    Object.assign(this, props);
  }
  @PrimaryGeneratedColumn('increment')
  id?: number;
  @Column()
  description: string;
  @Column()
  local: string;
  @OneToMany(() => UserEntity, (user) => user.group.id)
  users: UserEntity[];
}
