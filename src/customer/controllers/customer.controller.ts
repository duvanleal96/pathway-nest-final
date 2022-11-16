import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { CustomerService } from '../services/customer.service';
import { CustomerDto } from '../dto/customer.dto';
@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}
  @Get()
  getAll(): CustomerDto[] {
    return this.customerService.getAll();
  }
  @Post()
  GetData(@Body() customer: CustomerDto): CustomerDto {
    return this.customerService.createCustomer(customer);
  }
  @Get('/:uuid')
  getUserByUuid(@Param('uuid') uuid: string): CustomerDto | undefined {
    return this.customerService.getById(uuid);
  }
  @Put('/:uuid')
  putUsers(
    @Param('uuid') uuid: string,
    @Body() customer: CustomerDto,
  ): CustomerDto | undefined {
    return this.customerService.putCustomer(uuid, customer);
  }
  @Patch('/:uuid')
  pathCustomers(
    @Param('uuid') uuid: string,
    @Body() customer: CustomerDto,
  ): CustomerDto | undefined {
    return this.customerService.putCustomer(uuid, customer);
  }
  @Delete('/:uuid')
  deleteUser(@Param('uuid') uuid: string): boolean {
    return this.customerService.deleteCustomers(uuid);
  }
}
