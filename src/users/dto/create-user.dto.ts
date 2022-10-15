import { User } from '../entities/user.entity';

export class CreateUserDto implements User {
  id?: string;
  group: { id?: number };
  username: string;
  password: string;
}
