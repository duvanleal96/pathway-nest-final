import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InvoiceDto } from '../dto/invoice.dto';

@Injectable()
export class InvoiceService {
  invoice: InvoiceDto[] = [
    {
      uuid: '1',
      customerUuid: '1',
      nit: '12344',
      invoiceDetail: [
        {
          uuid: '1',
          name: 'fortident',
          price: 20000,
        },
        {
          uuid: '2',
          name: 'costeñita',
          price: 2500,
        },
      ],
    },
    {
      uuid: '2',
      customerUuid: '2',
      nit: '99999',
      invoiceDetail: [
        {
          uuid: '3',
          name: 'chocoso',
          price: 2000,
        },
        {
          uuid: '4',
          name: 'chocorramo',
          price: 2500,
        },
      ],
    },
  ];
  getInvoices(): InvoiceDto[] {
    return this.invoice;
  }

  createIvoice(invoice: InvoiceDto): InvoiceDto {
    this.invoice.push(invoice);
    return invoice;
  }

  getById(uuid: string): InvoiceDto {
    const invoices = this.invoice.find(
      (invoice: InvoiceDto) => invoice.uuid == uuid,
    );
    if (invoices == undefined) {
      throw new HttpException(
        `cliente con uuid ${uuid} no existe`,
        HttpStatus.NOT_FOUND,
      );
    }
    return invoices;
  }

  putInvoices(uuid: string, invoicesUpdate: InvoiceDto) {
    const invoices = this.invoice.find(
      (invoice: InvoiceDto) => (invoice.uuid = uuid),
    );
    if (invoices == undefined) {
      throw new HttpException(
        `factura con uuid ${uuid} no existe`,
        HttpStatus.NOT_FOUND,
      );
    }
    invoices.customerUuid = invoicesUpdate.customerUuid;
    invoices.nit = invoicesUpdate.nit;
    invoices.invoiceDetail = invoicesUpdate.invoiceDetail;
    return invoices;
  }

  pathInvoice(uuid: string, invoiceUpdate: InvoiceDto) {
    const invoice = this.invoice.find(
      (invoice: InvoiceDto) => invoice.uuid == uuid,
    );
    if (invoice == undefined) {
      throw new HttpException(
        `cliente con uuid ${uuid} no existe`,
        HttpStatus.NOT_FOUND,
      );
    }
    const customerPatch: InvoiceDto = {
      ...invoice,
      ...invoiceUpdate,
    };
    this.invoice = this.invoice.map((customer: InvoiceDto) => {
      return customer.uuid == uuid ? customerPatch : customer;
    });
    return customerPatch;
  }

  deleteInvoice(uuid: string): boolean {
    const deleteInvoice = this.invoice.findIndex(
      (invoice: InvoiceDto) => (invoice.uuid = uuid),
    );
    if (deleteInvoice == -1) return false;
    this.invoice.splice(deleteInvoice, 1);
    return true;
  }
}
