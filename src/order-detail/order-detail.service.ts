import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderDetail } from 'output/entities/OrderDetail';
import { Orders } from 'output/entities/Orders';
import { Product } from 'output/entities/Product';
import { Repository } from 'typeorm';

@Injectable()
export class OrderDetailService {
  constructor(
    @InjectRepository(OrderDetail)
    private serviceRepo: Repository<OrderDetail>,
  ) {}

  public async get() {
    return await this.serviceRepo.find({
      relations: {
        order: true,
        product: true,
      },
    });
  }

  public async findOne(id: number) {
    return await this.serviceRepo.findOne({
      where: { id: id },
      relations: {
        order: true,
        product: true,
      },
    });
  }

  public async Create(quantity: number, order: Orders, product: Product) {
    try {
      const detail = await this.serviceRepo.save({
        quantity: quantity,
        order: order,
        product: product,
        createdat: new Date(),
        updatedat: new Date(),
      });
      return detail;
    } catch (error) {
      return error.message;
    }
  }

  public async Update(
    id: number,
    quantity: number,
    order: Orders,
    product: Product,
  ) {
    try {
      const detail = await this.serviceRepo.update(id, {
        quantity: quantity,
        order: order,
        product: product,
        createdat: new Date(),
        updatedat: new Date(),
      });
      return detail;
    } catch (error) {
      return error.message;
    }
  }

  public async Delete(id: number) {
    try {
      const detail = await this.serviceRepo.delete(id);
      return detail;
    } catch (error) {
      return error.message;
    }
  }
}
