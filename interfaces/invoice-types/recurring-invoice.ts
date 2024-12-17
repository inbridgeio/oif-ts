import { InvoiceItem } from "../../types/invoice-item";
import {IBaseInvoice} from "../base/base-invoice";
import {ISEPAPaymentInformation} from "../payment-information/sepa-payment";
import {ISEPAMandatePaymentInformation} from "../payment-information/sepa-mandate";
import {IServicePeriod} from "../base/service-period";
import {InvoiceType} from "../../enums/invoice-type.enum";

export interface IRecurringInvoice extends IBaseInvoice, IServicePeriod {
    type: InvoiceType.RECURRING_INVOICE;
    paymentInformation: ISEPAPaymentInformation | ISEPAMandatePaymentInformation;
    items: InvoiceItem[];

    /**
     * @description The id of the subscription that this invoice is for
     */
    subscriptionId?: string;
} 