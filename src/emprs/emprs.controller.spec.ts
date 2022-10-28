import { Test, TestingModule } from '@nestjs/testing';
import { EmprsController } from './emprs.controller';
import { EmprsService } from './emprs.service';

describe('EmprsController', () => {
  let controller: EmprsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmprsController],
      providers: [EmprsService],
    }).compile();

    controller = module.get<EmprsController>(EmprsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
