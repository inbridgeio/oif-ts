import { InvoiceItem } from "../../types/invoice-item";
import {ISEPAPaymentInformation} from "../payment-information/sepa-payment";
import {ISEPAMandatePaymentInformation} from "../payment-information/sepa-mandate";
import {IBaseInvoice} from "../base/base-invoice";
import {IServicePeriod} from "../base/service-period";
import {InvoiceType} from "../../enums/invoice-type.enum";

/**
 * @inheritDoc
 */
export interface IDefaultInvoice extends IBaseInvoice, IServicePeriod {
    type: InvoiceType.INVOICE;
    paymentInformation: ISEPAPaymentInformation | ISEPAMandatePaymentInformation;
    items: InvoiceItem[];
}