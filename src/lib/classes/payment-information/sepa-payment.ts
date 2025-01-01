import {SEPAInformation} from "../../types/sepa-information.type";
import {PaymentInformationType} from "../../enums/payment-information-type.enum";
import {BusinessInformation} from "../../types/business-information.type";
import {PrivatePersonInformation} from "../../types/private-person-information.type";


export class SEPAPayment {
    readonly paymentType = PaymentInformationType.SEPA;

    /**
     * @inheritDoc
     */
    debitor: BusinessInformation | PrivatePersonInformation;

    /**
     * @inheritDoc
     */
    creditor: SEPAInformation & (BusinessInformation | PrivatePersonInformation);
}
