import {InvoiceType} from "../../enums/invoice-type.enum";

export class CancellationInvoice {
    /**
     * @inheritDoc
     */
    readonly type: InvoiceType.CANCELLATION = InvoiceType.CANCELLATION;
} 