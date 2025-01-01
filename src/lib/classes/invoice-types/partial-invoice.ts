import {InvoiceType} from "../../enums/invoice-type.enum";
import {BaseInvoice} from "../base-invoice";

export class PartialInvoice extends BaseInvoice  {
    /**
     * @inheritDoc
     */
    readonly type: InvoiceType.PARTIAL_INVOICE = InvoiceType.PARTIAL_INVOICE;

    /**
     * The ID of the invoice that this invoice is a partial payment of
     */
    previousInvoiceId: string;
}