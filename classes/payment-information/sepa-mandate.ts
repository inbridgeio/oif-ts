import { SEPAMandateType } from "../../enums/sepa-mandate-type.enum";
import {SEPAInformation} from "../../types/sepa-information.type";
import {BusinessPostalAddress} from "../address/business-postal-address";
import {PrivatePostalAddress} from "../address/private-postal-address";
import {ISEPAMandatePaymentInformation} from "../../interfaces/payment-information/sepa-mandate";
import {SignatureInformation} from "../../types/signature-information";

export class SEPAMandatePaymentInformation implements ISEPAMandatePaymentInformation {
    /**
     * @inheritDoc
     */
    type: SEPAMandateType;

    /**
     * @inheritDoc
     */
    mandateId: string;

    /**
     * @inheritDoc
     */
    dueDate: Date;

    /**
     * @inheritDoc
     */
    signature?: SignatureInformation;

    /**
     * @inheritDoc
     */
    debitor: SEPAInformation & (BusinessPostalAddress | PrivatePostalAddress);

    /**
     * @inheritDoc
     */
    creditor: {
        mandateReference: string;
    } & (BusinessPostalAddress | PrivatePostalAddress);
}
