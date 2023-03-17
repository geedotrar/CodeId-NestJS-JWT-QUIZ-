import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class UserController {
  constructor(private authService: UserService) {}

  @Post('/signup')
  public async signup(@Body() fields: any) {
    return this.authService.signUp(fields);
  }
  @UseGuards(AuthGuard('local'))
  @Post('/signin')
  public async signin(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/profile')
  public async getProfile(@Request() req) {
    const { orderDetails, ...result } = req.user;
    return result;
  }
  @UseGuards(AuthGuard('jwt'))
  @Get('/order')
  public async getOrder(@Request() req) {
    const { username, password, ...result } = req.user;
    return result;
  }
}
