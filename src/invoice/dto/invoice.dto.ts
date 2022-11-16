import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import { randomUUID } from 'crypto';
import { InvoiceDetailDto } from './invoice.detail.dto';
import { InvoiceInterface } from '../interface/invoice.interface';
export class InvoiceDto implements InvoiceInterface {
  @IsOptional()
  @IsUUID()
  uuid: string;

  @IsString()
  customerUuid: string;

  @IsString()
  nit: string;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => InvoiceDetailDto)
  invoiceDetail: InvoiceDetailDto[];

  constructor(invoice?: InvoiceDto) {
    this.uuid = invoice?.uuid ?? randomUUID();
    this.customerUuid = invoice?.customerUuid ?? '';
    this.nit = invoice?.nit ?? '';
    this.invoiceDetail = invoice?.invoiceDetail ?? [];
  }
}
