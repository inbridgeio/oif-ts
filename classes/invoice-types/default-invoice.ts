import {IDefaultInvoice} from "../../interfaces/invoice-types/default-invoice";
import {CorrectingInvoiceData} from "../../types/correcting-invoice-data";
import { InvoiceType } from "../../enums/invoice-type.enum";
import {SEPAMandatePaymentInformation} from "../payment-information/sepa-mandate";
import {SEPAPaymentInformation} from "../payment-information/sepa-payment";
import {InvoiceItem} from "../../types/invoice-item";

export class DefaultInvoice implements IDefaultInvoice {
    /**
     * @inheritDoc
     */
    version: "0.1";
    type: InvoiceType.INVOICE;

    id: string;
    createdAt: Date;

    servicePeriod: { start: Date; end: Date; };
    paymentInformation: SEPAPaymentInformation | SEPAMandatePaymentInformation;
    items: InvoiceItem[];

    correction?: CorrectingInvoiceData;
}