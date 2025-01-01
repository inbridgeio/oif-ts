import {InvoiceType} from "../../enums/invoice-type.enum";
import {BaseInvoice} from "../base-invoice";
import {PaymentInformation} from "../../types/payment-information";
import {CashPayment} from "../payment-information/cash-payment";

export class RecurringInvoice extends BaseInvoice {
    /**
     * @inheritDoc
     */
    readonly type: InvoiceType.RECURRING_INVOICE = InvoiceType.RECURRING_INVOICE;


    /**
     * @inheritDoc
     */
    paymentInformation: Exclude<PaymentInformation, CashPayment>;

    /**
     * Reference to the subscription that this invoice is for
     */
    subscriptionId?: string;
} 