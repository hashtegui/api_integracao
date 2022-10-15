import { User } from '../entities/user.entity';

export class CreateUserDto implements User {
  groupId: number;
  id?: string;
  username: string;
  password: string;
}
