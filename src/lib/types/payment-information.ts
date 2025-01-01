import {SEPAPayment} from "../classes/payment-information/sepa-payment";
import {SEPAMandatePayment} from "../classes/payment-information/sepa-mandate-payment";
import {CreditCardPayment} from "../classes/payment-information/credit-card-payment";
import {CashPayment} from "../classes/payment-information/cash-payment";
import {SWIFTPayment} from "../classes/payment-information/swift-payment";

export type PaymentInformation = SEPAPayment | SEPAMandatePayment | CreditCardPayment | CashPayment | SWIFTPayment;