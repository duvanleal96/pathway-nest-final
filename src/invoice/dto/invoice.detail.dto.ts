import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { randomUUID } from 'crypto';
import { InvoiceDetailInterface } from '../interface/invoice.detail.interface';
export class InvoiceDetailDto implements InvoiceDetailInterface {
  @IsOptional()
  @IsUUID()
  uuid: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsInt()
  price: number;

  constructor(invoice?: InvoiceDetailDto) {
    this.uuid = invoice?.uuid ?? randomUUID();
    this.name = invoice?.name ?? '';
    this.price = invoice?.price ?? 0;
  }
}
