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
  ValidationPipe,
} from '@nestjs/common';
import { GuardAuth } from 'src/customer/guards/guards.auth';
import { InvoiceDto } from '../dto/invoice.dto';
import { InvoiceService } from '../services/invoice.service';

@Controller('invoice')
export class InvoiceController {
  constructor(private readonly InvoiceService: InvoiceService) {}
  @Get()
  getInvoices(): InvoiceDto[] {
    return this.InvoiceService.getInvoices();
  }

  @Get('/:uuid')
  getInvoiceByUuid(@Param('uuid') uuid: string) {
    return this.InvoiceService.getById(uuid);
  }

  @Put(':uuid')
  putInvoice(
    @Param('uuid') uuid: string,
    @Body() invoice: InvoiceDto,
  ): InvoiceDto | undefined {
    return this.InvoiceService.putInvoices(uuid, invoice);
  }

  @Post()
  @UseGuards(GuardAuth)
  postInvoice(
    @Body(
      new ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
      }),
    )
    invoiceCreate: InvoiceDto,
  ): InvoiceDto {
    return this.InvoiceService.createIvoice(invoiceCreate);
  }

  @Patch(':uuid')
  @UseGuards(GuardAuth)
  patchInvoice(
    @Param('uuid') uuid: string,
    @Body(
      new ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
      }),
    )
    invoice: InvoiceDto,
  ) {
    return this.InvoiceService.pathInvoice(uuid, invoice);
  }

  @Delete('/:uuid')
  deleteUser(@Param('uuid') uuid: string): boolean {
    return this.InvoiceService.deleteInvoice(uuid);
  }
}
