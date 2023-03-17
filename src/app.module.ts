import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModuleModule } from './module/module.module';
import { ProductCategoryService } from './product-category/product-category.service';
import { ProductCategoryController } from './product-category/product-category.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'ref',
      entities: ['dist/output/entities/*.js'],
      synchronize: false,
      autoLoadEntities: true,
    }),
    ModuleModule,
  ],
  providers: [],
  controllers: [],
})
export class AppModule {}
