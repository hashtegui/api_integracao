import { Controller, Get, Query, Param } from '@nestjs/common';
import { EmbalagensService } from './embalagens.service';

@Controller('embalagens')
export class EmbalagensController {
  constructor(private readonly embalagensService: EmbalagensService) {}

  @Get()
  async findOnePorCod(
    @Query('codbarras') codbarras: number,
    @Query('filial_id') filial_id: number,
  ) {
    return await this.embalagensService.pesquisarPorCodBarrasEFilial(
      codbarras,
      filial_id,
    );
  }

  @Get(':id')
  async findOne(
    @Param('id') id: string,
    @Query('filial_id') filial_id: number,
  ) {
    if (filial_id) {
      return await this.embalagensService.findEmbalagemPorFilial(
        +id,
        filial_id,
      );
    }
    return await this.embalagensService.findOne(+id);
  }
}
