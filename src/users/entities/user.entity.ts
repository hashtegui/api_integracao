import { GroupEntity } from 'src/groups/entities/group.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

export interface User {
  id?: string;
  username: string;
  password: string;
  groupId: number;
  active: boolean;
}
@Entity({ name: 'users' })
export class UserEntity {
  constructor(props: User) {
    Object.assign(this, props);
  }
  @PrimaryGeneratedColumn('uuid')
  id?: string;
  @Column({ unique: true })
  username: string;
  @Column({ nullable: true, unique: true })
  password: string;
  @Column({ default: true })
  active?: boolean;
  @ManyToOne(() => GroupEntity, (group) => group.users)
  group: GroupEntity;
}
