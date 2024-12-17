import {InvoiceType} from "../../enums/invoice-type.enum";
import {IBaseInvoice} from "../base/base-invoice";

export interface ICancellationInvoice extends IBaseInvoice {
    type: InvoiceType.CANCELLATION;

    /**
     * @description The id of the invoice that is being cancelled
     */
    cancellingId: string;
} 