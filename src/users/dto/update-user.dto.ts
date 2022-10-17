import { User } from '../entities/user.entity';

export class UpdateUserDto implements User {
  active: boolean;
  groupId: number;
  id?: string;
  username: string;
  password: string;
}
