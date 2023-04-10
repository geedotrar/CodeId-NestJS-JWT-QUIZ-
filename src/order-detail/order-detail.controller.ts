import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { OrderDetailService } from './order-detail.service';
import { Orders } from 'output/entities/Orders';
import { Product } from 'output/entities/Product';

@Controller('orderdetail')
export class OrderDetailController {
  constructor(private Services: OrderDetailService) {}

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
    @Body('quantity') quantity: number,
    @Body('order') order: Orders,
    @Body('product') product: Product,
  ) {
    return await this.Services.Create(quantity, order, product);
  }

  @Put(':id')
  public async Update(
    @Param('id') id: number,
    @Body('quantity') quantity: number,
    @Body('order') order: Orders,
    @Body('product') product: Product,
  ) {
    return await this.Services.Update(id, quantity, order, product);
  }

  @Delete(':id')
  public async Delete(@Param('id') id: number) {
    return await this.Services.Delete(id);
  }
}
