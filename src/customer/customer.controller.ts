import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CustomerService } from './customer.service';
import { Users } from 'output/entities/Users';

@Controller('customer')
export class CustomerController {
  constructor(private Services: CustomerService) {}

  @Get()
  public async getAll() {
    return await this.Services.get();
  }

  @Get(':id')
  public async getOne(@Param('id') id: number) {
    return await this.Services.findOne(id);
  }

  @Post()
  public async Create(
    @Body('firstname') firstname: string,
    @Body('lastname') lastname: string,
    @Body('user') user: Users,
  ) {
    return await this.Services.Create(firstname, lastname, user);
  }

  @Put(':id')
  public async Update(
    @Param('id') id: number,
    @Body('firstname') firstname: string,
    @Body('lastname') lastname: string,
    @Body('user') user: Users,
  ) {
    return await this.Services.Update(id, firstname, lastname, user);
  }

  @Delete(':id')
  public async Delete(@Param('id') id: number) {
    return await this.Services.Delete(id);
  }
}
