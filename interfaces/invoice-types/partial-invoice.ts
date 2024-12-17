import { InvoiceItem } from "../../types/invoice-item";
import {ISEPAPaymentInformation} from "../payment-information/sepa-payment";
import {ISEPAMandatePaymentInformation} from "../payment-information/sepa-mandate";
import {IBaseInvoice} from "../base/base-invoice";
import {IServicePeriod} from "../base/service-period";
import {InvoiceType} from "../../enums/invoice-type.enum";

export interface IPartialInvoice extends IBaseInvoice, IServicePeriod {
    type: InvoiceType.PARTIAL_INVOICE;
    paymentInformation: ISEPAPaymentInformation | ISEPAMandatePaymentInformation;
    items: InvoiceItem[];

    /**
     * @description The id of the previous invoice
     */
    previousInvoiceId: string;
} 