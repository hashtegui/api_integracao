import { User } from '../entities/user.entity';

export class UpdateUserDto implements User {
  groupId: number;
  id?: string;
  username: string;
  password: string;
}
