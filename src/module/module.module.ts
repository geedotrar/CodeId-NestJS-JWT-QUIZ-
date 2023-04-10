import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from 'src/user/user.service';
import { UserController } from 'src/user/user.controller';
import { Users } from 'output/entities/Users';
import { Customer } from 'output/entities/Customer';
import { OrderDetail } from 'output/entities/OrderDetail';
import { Orders } from 'output/entities/Orders';
import { Product } from 'output/entities/Product';
import { ProductCategory } from 'output/entities/ProductCategory';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtGuard } from 'src/auth/jwt.strategy';
import { LocalGuard } from 'src/auth/local.strategy';
import { ProductCategoryService } from 'src/product-category/product-category.service';
import { ProductCategoryController } from 'src/product-category/product-category.controller';
import { CustomerController } from 'src/customer/customer.controller';
import { CustomerService } from 'src/customer/customer.service';
import { OrdersService } from 'src/orders/orders.service';
import { OrdersController } from 'src/orders/orders.controller';
import { ProductService } from 'src/product/product.service';
import { ProductController } from 'src/product/product.controller';
import { OrderDetailService } from 'src/order-detail/order-detail.service';
import { OrderDetailController } from 'src/order-detail/order-detail.controller';
import { MulterModule } from '@nestjs/platform-express';
import { UploadMiddleware } from 'src/multer/multer.middleware';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Users,
      Customer,
      OrderDetail,
      Orders,
      Product,
      ProductCategory,
    ]),
    PassportModule,
    JwtModule.register({
      secret: 'secretKey',
      signOptions: { expiresIn: '2d' },
    }),
    MulterModule.register(UploadMiddleware.MulterOption()),
  ],
  providers: [
    UserService,
    JwtGuard,
    UserService,
    LocalGuard,
    ProductCategoryService,
    CustomerService,
    OrdersService,
    ProductService,
    OrderDetailService,
  ],
  controllers: [
    UserController,
    ProductCategoryController,
    CustomerController,
    OrdersController,
    ProductController,
    OrderDetailController,
  ],
  exports: [UserService],
})
export class ModuleModule {}
