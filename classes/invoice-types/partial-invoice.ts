import { InvoiceItem } from "../../types/invoice-item";
import { InvoiceType } from "../../enums/invoice-type.enum";
import {IPartialInvoice} from "../../interfaces/invoice-types/partial-invoice";
import {CorrectingInvoiceData} from "../../types/correcting-invoice-data";
import {SEPAPaymentInformation} from "../payment-information/sepa-payment";
import {SEPAMandatePaymentInformation} from "../payment-information/sepa-mandate";

export class PartialInvoice implements IPartialInvoice {
    version: "0.1";
    type: InvoiceType.PARTIAL_INVOICE;

    id: string;
    previousInvoiceId: string;
    createdAt: Date;

    servicePeriod: { start: Date; end: Date; };
    paymentInformation: SEPAPaymentInformation | SEPAMandatePaymentInformation;
    items: InvoiceItem[];

    correction?: CorrectingInvoiceData;
}