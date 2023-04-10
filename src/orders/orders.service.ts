import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Orders } from 'output/entities/Orders';
import { Users } from 'output/entities/Users';
import { Repository } from 'typeorm';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Orders)
    private serviceRepo: Repository<Orders>,
  ) {}

  public async get() {
    return await this.serviceRepo.find({
      relations: {
        user: true,
      },
    });
  }

  public async findOne(id: number) {
    return await this.serviceRepo.findOne({
      where: { id: id },
      relations: {
        user: true,
      },
    });
  }

  public async Create(totalproduct: number, totalprice: string, user: Users) {
    try {
      const order = await this.serviceRepo.save({
        totalproduct: totalproduct,
        totalprice: totalprice,
        user: user,
        createdat: new Date(),
        updatedat: new Date(),
      });
      return order;
    } catch (error) {
      return error.message;
    }
  }

  public async Update(
    id: number,
    totalproduct: number,
    totalprice: string,
    user: Users,
  ) {
    try {
      const order = await this.serviceRepo.update(id, {
        totalproduct: totalproduct,
        totalprice: totalprice,
        user: user,
        updatedat: new Date(),
      });
      return order;
    } catch (error) {
      return error.message;
    }
  }

  public async Delete(id: number) {
    try {
      const order = await this.serviceRepo.delete(id);
      return order;
    } catch (error) {
      return error.message;
    }
  }
}
