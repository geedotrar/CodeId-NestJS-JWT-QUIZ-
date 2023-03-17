import { Controller, Get, Param } from '@nestjs/common';
import { ProductCategoryService } from './product-category.service';

@Controller('category')
export class ProductCategoryController {
  constructor(private Services: ProductCategoryService) {}
  @Get(':id')
  public async getOne(@Param('id') id: number) {
    return await this.Services.findOne(id);
  }
}
