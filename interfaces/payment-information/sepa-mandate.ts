import { SEPAMandateType } from "../../enums/sepa-mandate-type.enum";

import {IPostalAddress} from "../address/postal-address";
import {BusinessContact} from "../../classes/address/business-contact";
import {PrivateContact} from "../../classes/address/private-contact";
import {SEPAInformation} from "../../types/sepa-information.type";
import {SignatureInformation} from "../../types/signature-information";

export interface ISEPAMandatePaymentInformation {
    type: SEPAMandateType;

    /**
     * The reference id of the mandate.
     */
    mandateId: string;

    /**
     * The date when the money will be withdrawn.
     */
    dueDate: Date;

    /**
     * A signature can be provided to confirm the mandate.
     */
    signature?: SignatureInformation;

    debitor: SEPAInformation & (IPostalAddress<BusinessContact> | IPostalAddress<PrivateContact>);

    creditor: {
        mandateReference: string;
    } & (IPostalAddress<BusinessContact> | IPostalAddress<PrivateContact>);
}
