import {InvoiceType} from "../../enums/invoice-type.enum";
import {CorrectingInvoiceData} from "../../types/correcting-invoice-data";
import {ICancellationInvoice} from "../../interfaces/invoice-types/cancellation-invoice";

export class CancellationInvoice implements ICancellationInvoice {
    type: InvoiceType.CANCELLATION;
    version: "0.1";

    id: string;
    cancellingId: string;

    createdAt: Date;
    correction?: CorrectingInvoiceData;
} 