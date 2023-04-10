import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductCategory } from 'output/entities/ProductCategory';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('product')
export class ProductController {
  constructor(private Services: ProductService) {}

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
    @Body('name') name: string,
    @Body('description') description: string,
    @Body('price') price: string,
    @Body('category') category: ProductCategory,
  ) {
    return await this.Services.Create(name, description, price, category);
  }

  @Post('/upload')
  @UseInterceptors(FileInterceptor('file'))
  public async upload(
    @UploadedFile() file,
    @Body('name') name: string,
    @Body('description') description: string,
    @Body('category') category: ProductCategory,
    @Body('price') price: string,
  ) {
    return await this.Services.Upload(file, name, description, category, price);
  }

  @Put(':id')
  public async Update(
    @Param('id') id: number,
    @Body('name') name: string,
    @Body('description') description: string,
    @Body('price') price: string,
    @Body('category') category: ProductCategory,
  ) {
    return await this.Services.Update(id, name, description, price, category);
  }

  @Put('/upload/:id')
  @UseInterceptors(FileInterceptor('file'))
  public async uploadUpdate(
    @Param('id') id: number,
    @UploadedFile() file,
    @Body('name') name: string,
    @Body('description') description: string,
    @Body('price') price: string,
    @Body('category') category: ProductCategory,
  ) {
    return await this.Services.UploadUpdate(
      id,
      file,
      name,
      description,
      price,
      category,
    );
  }

  @Delete(':id')
  public async Delete(@Param('id') id: number) {
    return await this.Services.Delete(id);
  }
}
