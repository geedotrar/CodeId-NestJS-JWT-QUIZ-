import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Users } from 'output/entities/Users';

@Controller('orders')
export class OrdersController {
  constructor(private Services: OrdersService) {}

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
    @Body('totalproduct') totalproduct: number,
    @Body('totalprice') totalprice: string,
    @Body('user') user: Users,
  ) {
    return await this.Services.Create(totalproduct, totalprice, user);
  }

  @Put(':id')
  public async Update(
    @Param('id') id: number,
    @Body('totalproduct') totalproduct: number,
    @Body('totalprice') totalprice: string,
    @Body('user') user: Users,
  ) {
    return await this.Services.Update(id, totalproduct, totalprice, user);
  }

  @Delete(':id')
  public async Delete(@Param('id') id: number) {
    return await this.Services.Delete(id);
  }
}
