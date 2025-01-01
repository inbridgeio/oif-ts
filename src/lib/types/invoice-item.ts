import {InvoiceItemWithDiscount} from "../classes/invoice-item-with-discount";
import {InvoiceItemWithoutDiscount} from "../classes/invoice-item-without-discount";

export type InvoiceItem = InvoiceItemWithDiscount | InvoiceItemWithoutDiscount