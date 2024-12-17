import {Currency} from "../enums/currency.enum";
import {InvoiceItemUnit} from "../enums/invoice-item-unit.enum";

export interface IInvoiceItem {
    id: string;
    description: string;
    quantity: number;
    unit: InvoiceItemUnit;
    price: number;
    currency: Currency;
    taxRate: number;

    get netPrice(): number;
    get tax(): number;
    get grossPrice(): number;
}