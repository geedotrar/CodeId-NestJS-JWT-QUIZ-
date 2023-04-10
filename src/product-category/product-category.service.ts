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

  public async getProductCategory() {
    return await this.serviceRepo.find();
  }

  //   public async findOne(id: number) {
  //     return await this.serviceRepo.findOne({
  //       where: { id: id },
  //       relations: { products: true },
  //     });
  //   }
  // }
  public async findOne(id: number) {
    return await this.serviceRepo.findOne({ where: { id: id } });
  }

  public async Create(name: string, description: string) {
    try {
      const prodCategory = await this.serviceRepo.save({
        name: name,
        description: description,
        createdat: new Date(),
        updatedat: new Date(),
      });
      return prodCategory;
    } catch (error) {
      return error.message;
    }
  }

  public async Update(id: number, name: string, description: string) {
    try {
      const prodCategory = await this.serviceRepo.update(id, {
        name: name,
        description: description,
        updatedat: new Date(),
      });
      return prodCategory;
    } catch (error) {
      return error.message;
    }
  }

  public async Delete(id: number) {
    try {
      const prodCategory = await this.serviceRepo.delete(id);
      return prodCategory;
    } catch (error) {
      return error.message;
    }
  }
}
