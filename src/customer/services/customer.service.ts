import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CustomerGetDto } from '../dto/customer.get.dto';
import { CustomerPostDto } from '../dto/customer.post.dto';
import { CustomerPatchDto } from '../dto/customer.patch.dto';

@Injectable()
export class CustomerService {
  customers: CustomerGetDto[] = [
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
  getAll(): CustomerGetDto[] {
    return this.customers;
  }
  createCustomer(customer: CustomerPostDto) {
    this.customers.push(customer);
    return customer;
  }
  getById(uuid: string) {
    return this.customers.find(
      (customer: CustomerGetDto) => (customer.uuid = uuid),
    );
  }
  putCustomer(uuid: string, customers: CustomerPatchDto) {
    const customer = this.customers.find(
      (customer: CustomerPatchDto) => (customer.uuid = uuid),
    );
    if (customer != undefined) {
      customer.name = customers.name;
      customer.email = customers.email;
      customer.dni = customers.dni;
    }
    return customer;
  }
  pathCustomer(uuid: string, customerUpdate: CustomerPatchDto) {
    const customer = this.customers.find(
      (customer: CustomerPatchDto) => (customer.uuid = uuid),
    );
    if (customer == undefined) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    const customerPatch: CustomerPatchDto = {
      ...customer,
      ...customerUpdate,
    };
    this.customers = this.customers.map((customer: CustomerPatchDto) => {
      return customer.uuid == uuid ? customerPatch : customer;
    });
    return customerPatch;
  }

  deleteCustomers(uuid: string): boolean {
    const deleteCustomers = this.customers.findIndex(
      (customer: CustomerGetDto) => (customer.uuid = uuid),
    );
    if (deleteCustomers == -1) return false;
    this.customers.splice(deleteCustomers, 1);
    return true;
  }
}
