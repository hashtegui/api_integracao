import { PartialType } from '@nestjs/swagger';
import { CreateEmprDto } from './create-empr.dto';

export class UpdateEmprDto extends PartialType(CreateEmprDto) {}
