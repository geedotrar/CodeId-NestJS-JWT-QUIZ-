import { Injectable } from '@nestjs/common';
import { ProductCategory } from 'output/entities/ProductCategory';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductCategoryService {
  constructor(
    @InjectRepository(ProductCategory)
    private serviceRepo: Repository<ProductCategory>,
  ) {}

  public async findOne(id: number) {
    return await this.serviceRepo.findOne({
      where: { id: id },
      relations: { products: true },
    });
  }
}
