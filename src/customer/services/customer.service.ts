import { Injectable } from '@nestjs/common';
import { CustomerDto } from '../dto/customer.dto';

@Injectable()
export class CustomerService {
  customers: CustomerDto[] = [
    {
      uuid: '1',
      name: 'duvan',
      email: 'duvanleal@gmail.com',
      dni: '1092954381',
    },
    {
      uuid: '2',
      name: 'felipe',
      email: 'felipe@gmail.com',
      dni: '1090712374',
    },
  ];
  getAll(): CustomerDto[] {
    return this.customers;
  }
  createCustomer(customer: CustomerDto): CustomerDto {
    this.customers.push(customer);
    return customer;
  }
  getById(uuid: string): CustomerDto | undefined {
    return this.customers.find(
      (customer: CustomerDto) => (customer.uuid = uuid),
    );
  }
  putCustomer(uuid: string, customers: CustomerDto) {
    const customer = this.customers.find(
      (customer: CustomerDto) => (customer.uuid = uuid),
    );
    if (customer != undefined) {
      customer.name = customers.name;
      customer.email = customers.email;
      customer.dni = customers.dni;
    }
    return customer;
  }
  pathCustomer(
    uuid: string,
    customerUpdate: CustomerDto,
  ): CustomerDto | undefined {
    const customer = this.customers.find(
      (customer: CustomerDto) => (customer.uuid = uuid),
    );
    if (customer != undefined) {
      const customerPatch: CustomerDto = {
        ...customer,
        ...customerUpdate,
      };
      this.customers = this.customers.map((customer: CustomerDto) => {
        return customer.uuid == uuid ? customerPatch : customer;
      });
      return customerPatch;
    }
    return customer;
  }
  deleteCustomers(uuid: string): boolean {
    const deleteCustomers = this.customers.findIndex(
      (customer: CustomerDto) => (customer.uuid = uuid),
    );
    if (deleteCustomers == -1) return false;
    this.customers.splice(deleteCustomers, 1);
    return true;
  }
}
