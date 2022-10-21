import { IsNotEmpty, IsNumber } from 'class-validator';

export class ReadEmbalagemByIdDto {
  @IsNotEmpty()
  @IsNumber()
  filial_id: number;
  @IsNotEmpty()
  @IsNumber()
  codbarras: number;
}
