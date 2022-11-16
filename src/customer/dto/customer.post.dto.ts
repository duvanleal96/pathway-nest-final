import {
  IsString,
  IsUUID,
  IsEmail,
  IsOptional,
  IsNotEmpty,
} from 'class-validator';
import { randomUUID } from 'crypto';
import { CustomerInterface } from '../interface/customer.interface';

export class CustomerPostDto implements CustomerInterface {
  @IsOptional()
  @IsUUID()
  uuid: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  @IsEmail()
  email?: string;

  @IsNotEmpty()
  @IsString()
  dni: string;

  constructor(customer?: CustomerPostDto) {
    this.uuid = customer?.uuid ?? randomUUID();
    this.name = customer?.name ?? '';
    if (customer?.email) this.email = customer.email;
    this.dni = customer?.dni ?? '';
  }
}
