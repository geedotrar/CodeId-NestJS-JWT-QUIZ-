import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'output/entities/Product';
import { ProductCategory } from 'output/entities/ProductCategory';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private serviceRepo: Repository<Product>,
  ) {}

  public async get() {
    return await this.serviceRepo.find({
      relations: {
        category: true,
      },
    });
  }

  public async findOne(id: number) {
    return await this.serviceRepo.findOne({
      where: { id: id },
      relations: {
        category: true,
      },
    });
  }

  public async Create(
    name: string,
    description: string,
    price: string,
    category: ProductCategory,
  ) {
    try {
      const product = await this.serviceRepo.save({
        name: name,
        description: description,
        price: price,
        category: category,
        createdat: new Date(),
        updatedat: new Date(),
      });
      return product;
    } catch (error) {
      return error.message;
    }
  }

  public async Update(
    id: number,
    name: string,
    description: string,
    price: string,
    category: ProductCategory,
  ) {
    try {
      const product = await this.serviceRepo.update(id, {
        name: name,
        description: description,
        price: price,
        category: category,
        updatedat: new Date(),
      });
      return product;
    } catch (error) {
      return error.message;
    }
  }

  public async Delete(id: number) {
    try {
      const product = await this.serviceRepo.delete(id);
      return product;
    } catch (error) {
      return error.message;
    }
  }

  public async Upload(
    file,
    name: string,
    description: string,
    category: ProductCategory,
    price: string,
  ) {
    try {
      const product = await this.serviceRepo.save({
        name: name,
        description: description,
        category: category,
        price: price,
        image: file.originalname,
        createdat: new Date(),
        updatedat: new Date(),
      });
      return product;
    } catch (error) {
      return error.message;
    }
  }

  public async UploadUpdate(
    id: number,
    file,
    name: string,
    description: string,
    price: string,
    category: ProductCategory,
  ) {
    try {
      const product = await this.serviceRepo.update(id, {
        name: name,
        description: description,
        price: price,
        image: file.originalname,
        category: category,
        updatedat: new Date(),
      });
      return product;
    } catch (error) {
      return error.message;
    }
  }
}
