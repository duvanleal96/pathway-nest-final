import { CustomerInterface } from '../interface/customer.interface';
import { IsString, IsUUID } from 'class-validator';
export class CustomerDto implements CustomerInterface {
  @IsUUID()
  uuid: string;
  @IsString()
  name: string;
  @IsString()
  email: string;
  @IsString()
  dni: string;
  constructor(customer: CustomerDto) {
    this.uuid = customer.uuid;
    this.name = customer.name;
    this.email = customer.email;
    this.dni = customer.dni;
  }
}
