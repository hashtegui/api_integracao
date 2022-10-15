import { Group } from '../entities/group.entity';

export class CreateGroupDto implements Group {
  id?: number;
  description: string;
  local: string;
}
