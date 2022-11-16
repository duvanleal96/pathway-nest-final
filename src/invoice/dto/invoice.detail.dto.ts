import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { randomUUID } from 'crypto';
export class InvoiceDetailDto {
  @IsOptional()
  @IsUUID()
  uuid: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsInt()
  price: number;

  constructor(invoice: InvoiceDetailDto) {
    this.uuid = invoice?.uuid ?? randomUUID();
    this.name = invoice?.name;
    this.price = invoice?.price;
  }
}
