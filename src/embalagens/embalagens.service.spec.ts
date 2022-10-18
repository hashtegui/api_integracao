import { Test, TestingModule } from '@nestjs/testing';
import { EmbalagensService } from './embalagens.service';

describe('EmbalagensService', () => {
  let service: EmbalagensService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmbalagensService],
    }).compile();

    service = module.get<EmbalagensService>(EmbalagensService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
