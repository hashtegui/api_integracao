import { Test, TestingModule } from '@nestjs/testing';
import { EmprsService } from './emprs.service';

describe('EmprsService', () => {
  let service: EmprsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmprsService],
    }).compile();

    service = module.get<EmprsService>(EmprsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
