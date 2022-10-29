import { Controller, Get, Query } from '@nestjs/common';
import { PrecosService } from './precos.service';

@Controller('precos')
export class PrecosController {
  constructor(private readonly service: PrecosService) {}

  @Get()
  async getAllPrecos(@Query('codfilial') codfilial: number) {
    let numregiao: number;
    if (codfilial in [1, 5]) {
      numregiao = 1;
    } else if (codfilial in [2, 6]) {
      numregiao = 2;
    } else {
      numregiao = 3;
    }
    return await this.service.getAllPrices(numregiao);
  }
}
