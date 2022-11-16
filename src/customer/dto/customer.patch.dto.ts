import { IsEmail, IsOptional, IsString, IsUUID } from 'class-validator';
import { CustomerInterface } from '../interface/customer.interface';

export class CustomerPatchDto implements CustomerInterface {
  @IsOptional()
  @IsUUID()
  uuid: string;

  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsEmail()
  @IsString()
  email?: string;

  @IsOptional()
  @IsString()
  dni: string;
}
