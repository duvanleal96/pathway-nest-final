import { Module } from '@nestjs/common';
import { InvoiceController } from './controller/invoice.controller';
import { InvoiceService } from './services/invoice.service';

@Module({
  controllers: [InvoiceController],
  providers: [InvoiceService],
})
export class InvoiceModule {}
