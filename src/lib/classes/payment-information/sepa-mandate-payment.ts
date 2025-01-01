import {SEPAMandateType} from "../../enums/sepa-mandate-type.enum";
import {SEPAInformation} from "../../types/sepa-information.type";
import {SignatureInformation} from "../../types/signature-information";
import {PaymentInformationType} from "../../enums/payment-information-type.enum";
import {BusinessInformation} from "../../types/business-information.type";
import {PrivatePersonInformation} from "../../types/private-person-information.type";

export class SEPAMandatePayment {
    readonly paymentType = PaymentInformationType.SEPA_MANDATE;

    /**
     * @inheritDoc
     */
    type: SEPAMandateType;

    /**
     * The unique identifier of the mandate.
     */
    mandateId: string;

    /**
     * When the money will be taken from the debitor.
     */
    dueDate: Date;

    /**
     * Signature data containing metadata about the signature.
     */
    signature?: SignatureInformation;

    /**
     * @inheritDoc
     */
    debitor: SEPAInformation & (BusinessInformation | PrivatePersonInformation);

    /**
     * @inheritDoc
     */
    creditor: {
        mandateReference: string;
    } & (BusinessInformation | PrivatePersonInformation);
}
