import {CreditCardInformationType} from "../../types/credit-card-information.type";
import {PaymentInformationType} from "../../enums/payment-information-type.enum";
import {PrivatePersonInformation} from "../../types/private-person-information.type";
import {BusinessInformation} from "../../types/business-information.type";

export class CashPayment {
    readonly paymentType = PaymentInformationType.CASH;

    /**
     * @inheritDoc
     */
    debitor: CreditCardInformationType & (BusinessInformation | PrivatePersonInformation);

    /**
     * @inheritDoc
     */
    creditor: BusinessInformation | PrivatePersonInformation;
}
