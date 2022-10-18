import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product, 'test') private repo: Repository<Product>,
    @InjectRepository(Product) private repos: Repository<Product>,
  ) {}

  async create(createProdutoDto: CreateProductDto): Promise<any> {
    createProdutoDto.createdAt = `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()}`;
    const query = this.repo.createQueryBuilder('PCPRODUT');

    query.select('MAX(PCPRODUT.CODPROD)', 'max');
    const result = await query.getRawOne();

    console.log(result.max);

    const product = this.repo.create({
      ...createProdutoDto,
      product_id: result.max + 1,
    });

    return this.repo.save(product);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number): Promise<Product> {
    return this.repo.findOne({ where: { product_id: id } });
  }
}
