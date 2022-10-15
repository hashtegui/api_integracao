import { GroupEntity } from 'src/groups/entities/group.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

export interface User {
  id?: string;
  username: string;
  password: string;
  group: { id?: number };
}
@Entity({ name: 'users' })
export class UserEntity implements User {
  constructor(props: User) {
    Object.assign(this, props);
  }
  @PrimaryGeneratedColumn('uuid')
  id?: string;
  @Column()
  username: string;
  @Column()
  password: string;
  @ManyToOne(() => GroupEntity, (group) => group.users)
  group: GroupEntity;
}
