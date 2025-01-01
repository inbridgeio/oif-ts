import {PaymentInformationType} from "../enums/payment-information-type.enum";
import {SEPAPayment} from "../classes/payment-information/sepa-payment";

const PaymentInformationMap = {
    [PaymentInformationType.SEPA_MANDATE]: SEPAPayment,
    [PaymentInformationType.SEPA]: SEPAPayment,
    [PaymentInformationType.SWIFT]: SEPAPayment,
    [PaymentInformationType.CREDIT_CARD]: SEPAPayment,
    [PaymentInformationType.CASH]: SEPAPayment,
};
export function getPaymentInformationConstructorByType(type: PaymentInformationType) {
    return PaymentInformationMap[type];
}