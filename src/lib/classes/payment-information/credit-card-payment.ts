import {CreditCardInformationType} from "../../types/credit-card-information.type";
import {PaymentInformationType} from "../../enums/payment-information-type.enum";
import {BusinessInformation} from "../../types/business-information.type";
import {PrivatePersonInformation} from "../../types/private-person-information.type";

export class CreditCardPayment {
    readonly paymentType = PaymentInformationType.CREDIT_CARD;
    /**
     * @inheritDoc
     */
    debitor: CreditCardInformationType & (BusinessInformation | PrivatePersonInformation);

    /**
     * @inheritDoc
     */
    creditor: BusinessInformation | PrivatePersonInformation;
}
