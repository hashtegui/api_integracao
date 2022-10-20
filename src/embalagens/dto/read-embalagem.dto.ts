import { IsNumber } from 'class-validator';
import { IsNotEmpty } from 'class-validator';

export class ReadEmbalagemDto {
  @IsNotEmpty()
  @IsNumber()
  filial_id: number;
  @IsNotEmpty()
  @IsNumber()
  codbarras: number;
}
