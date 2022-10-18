import { Test, TestingModule } from '@nestjs/testing';
import { EmbalagensController } from './embalagens.controller';
import { EmbalagensService } from './embalagens.service';

describe('EmbalagensController', () => {
  let controller: EmbalagensController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmbalagensController],
      providers: [EmbalagensService],
    }).compile();

    controller = module.get<EmbalagensController>(EmbalagensController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
