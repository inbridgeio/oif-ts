import { InvoiceItem } from "../../types/invoice-item";
import {IRecurringInvoice} from "../../interfaces/invoice-types/recurring-invoice";
import {InvoiceType} from "../../enums/invoice-type.enum";
import { CorrectingInvoiceData } from "../../types/correcting-invoice-data";
import {SEPAPaymentInformation} from "../payment-information/sepa-payment";
import {SEPAMandatePaymentInformation} from "../payment-information/sepa-mandate";

export class RecurringInvoice implements IRecurringInvoice {
    version: "0.1";
    type: InvoiceType.RECURRING_INVOICE;

    id: string;
    subscriptionId?: string;
    createdAt: Date;

    servicePeriod: { start: Date; end: Date; };
    paymentInformation: SEPAPaymentInformation | SEPAMandatePaymentInformation;
    items: InvoiceItem[];

    correction?: CorrectingInvoiceData;
} 