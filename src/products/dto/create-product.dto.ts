import { ProductProps } from '../entities/product.entity';

export class CreateProductDto implements ProductProps {
  product_id: number;
  description: string;
  codbarras: number;
  createdAt: string;
}
