import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { CustomerInterface } from '../interface/customer.interface';

export class CustomerGetDto implements CustomerInterface {
  @IsNotEmpty()
  @IsUUID()
  uuid: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsEmail()
  @IsString()
  email?: string;

  @IsNotEmpty()
  @IsString()
  dni: string;
}
