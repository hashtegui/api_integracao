import { IsBoolean, IsNumber, IsString } from 'class-validator/';
import { User } from '../entities/user.entity';

export class CreateUserDto implements User {
  @IsBoolean()
  active: boolean;
  @IsNumber()
  groupId: number;
  @IsString()
  username: string;
  @IsString()
  password: string;
}
