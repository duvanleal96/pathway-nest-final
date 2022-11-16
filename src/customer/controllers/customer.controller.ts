import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  UseGuards,
  UseInterceptors,
  ValidationPipe,
} from '@nestjs/common';
import { CustomerService } from '../services/customer.service';
import { CustomerGetDto } from '../dto/customer.get.dto';
import { CustomerPostDto } from '../dto/customer.post.dto';
import { CustomerPatchDto } from '../dto/customer.patch.dto';
import { GuardAuth } from '../guards.auth';
import { ResponseInterceptor } from '../response.interceptor';
@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}
  @Get()
  getAll(): CustomerGetDto[] {
    return this.customerService.getAll();
  }

  @Post()
  @UseGuards(GuardAuth)
  @UseInterceptors(ResponseInterceptor)
  GetData(
    @Body(
      new ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
      }),
    )
    customer: CustomerPostDto,
  ): CustomerPostDto {
    return this.customerService.createCustomer(customer);
  }

  @Get('/:uuid')
  getUserByUuid(@Param('uuid') uuid: string) {
    return this.customerService.getById(uuid);
  }

  @Put('/:uuid')
  putUsers(@Param('uuid') uuid: string, @Body() customer: CustomerPatchDto) {
    return this.customerService.putCustomer(uuid, customer);
  }

  @Patch('/:uuid')
  @UseGuards(GuardAuth)
  @UseInterceptors(ResponseInterceptor)
  pathCustomers(
    @Param('uuid') uuid: string,
    @Body(
      new ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
      }),
    )
    customer: CustomerPatchDto,
  ) {
    return this.customerService.putCustomer(uuid, customer);
  }

  @Delete('/:uuid')
  deleteUser(@Param('uuid') uuid: string): boolean {
    return this.customerService.deleteCustomers(uuid);
  }
}
