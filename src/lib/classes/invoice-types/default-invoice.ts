import {InvoiceType} from "../../enums/invoice-type.enum";
import {BaseInvoice} from "../base-invoice";

export class DefaultInvoice extends BaseInvoice {
    /**
     * @inheritDoc
     */
    readonly type = InvoiceType.INVOICE;
}