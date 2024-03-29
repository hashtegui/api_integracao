import { IsNumber, IsNotEmpty } from 'class-validator';

export class ReadEmbalagemDto {
  @IsNotEmpty()
  @IsNumber()
  filial_id: number;
  @IsNotEmpty()
  @IsNumber()
  codbarras: number;
}
