import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Delete,
  Put,
} from '@nestjs/common';
import { ProductCategoryService } from './product-category.service';

@Controller('/category')
export class ProductCategoryController {
  constructor(private Services: ProductCategoryService) {}

  @Get()
  public async getAll() {
    return await this.Services.getProductCategory();
  }

  @Get(':id')
  public async getOne(@Param('id') id: number) {
    return await this.Services.findOne(id);
  }

  @Post()
  public async Create(
    @Body('name') name: string,
    @Body('description') description: string,
  ) {
    return await this.Services.Create(name, description);
  }

  @Put(':id')
  public async Update(
    @Param('id') id: number,
    @Body('name') name: string,
    @Body('description') description: string,
  ) {
    return await this.Services.Update(id, name, description);
  }

  @Delete(':id')
  public async Delete(@Param('id') id: number) {
    return await this.Services.Delete(id);
  }
}
