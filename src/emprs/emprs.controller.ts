import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EmprsService } from './emprs.service';
import { CreateEmprDto } from './dto/create-empr.dto';
import { UpdateEmprDto } from './dto/update-empr.dto';

@Controller('emprs')
export class EmprsController {
  constructor(private readonly emprsService: EmprsService) {}

  @Get()
  async findAll() {
    return await this.emprsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.emprsService.findOne(+id);
  }
}
