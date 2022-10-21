import { Controller, Get, Query, Param } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';
import { ReadEmbalagemDto } from './dto/read-embalagem.dto';
import { EmbalagensService } from './embalagens.service';

@Controller('embalagens')
export class EmbalagensController {
  constructor(private readonly repo: EmbalagensService) {}

  @Get()
  async findOnePorCod(
    @Query()
    query: ReadEmbalagemDto,
  ) {
    const embalagem = await this.repo.pesquisarPorCodBarrasEFilial(
      query.codbarras,
      query.filial_id,
    );

    if (!embalagem) {
      throw new HttpException(
        'no data was found for this params',
        HttpStatus.NOT_FOUND,
      );
    }

    return embalagem;
  }

  @Get(':id')
  async findOne(
    @Param('id') product_id: number,
    @Query('filial_id') filial_id: number,
  ) {
    if (filial_id) {
      const embalagens = await this.repo.findEmbalagemPorFilial(
        +product_id,
        filial_id,
      );

      if (!embalagens) {
        throw new HttpException(
          'No data was found for this params',
          HttpStatus.NOT_FOUND,
        );
      }
      return embalagens;
    }
    const embalagens = await this.repo.findOne(+product_id);
    if (embalagens.length === 0) {
      throw new HttpException(
        'No data was found for this params',
        HttpStatus.NOT_FOUND,
      );
    }
    return embalagens;
  }
}
