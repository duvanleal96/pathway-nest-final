import { InvoiceDetailDto } from '../dto/invoice.detail.dto';
export interface InvoiceInterface {
  uuid: string;
  customerUuid: string;
  nit: string;
  invoiceDetail: InvoiceDetailDto[];
}
