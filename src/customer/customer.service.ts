import { Injectable } from '@nestjs/common';
import { Customer } from 'output/entities/Customer';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from 'output/entities/Users';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private serviceRepo: Repository<Customer>,
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

  public async Create(firstname: string, lastname: string, user: Users) {
    try {
      const customer = await this.serviceRepo.save({
        firstname: firstname,
        lastname: lastname,
        user: user,
        createdat: new Date(),
        updatedat: new Date(),
      });
      return customer;
    } catch (error) {
      return error.message;
    }
  }

  public async Update(
    id: number,
    firstname: string,
    lastname: string,
    user: Users,
  ) {
    try {
      const customer = await this.serviceRepo.update(id, {
        firstname: firstname,
        lastname: lastname,
        user: user,
        updatedat: new Date(),
      });
      return customer;
    } catch (error) {
      return error.message;
    }
  }

  public async Delete(id: number) {
    try {
      const customer = await this.serviceRepo.delete(id);
      return customer;
    } catch (error) {
      return error.message;
    }
  }
}
