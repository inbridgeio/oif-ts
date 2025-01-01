import {DefaultInvoice} from "../classes/invoice-types/default-invoice";
import {RecurringInvoice} from "../classes/invoice-types/recurring-invoice";
import {PartialInvoice} from "../classes/invoice-types/partial-invoice";
import {CancellationInvoice} from "../classes/invoice-types/cancellation-invoice";

export type Invoice = DefaultInvoice | RecurringInvoice | PartialInvoice | CancellationInvoice;