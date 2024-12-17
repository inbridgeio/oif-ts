import {PrivatePostalAddress} from "../address/private-postal-address";
import {SEPAInformation} from "../../types/sepa-information.type";
import {ISEPAPaymentInformation} from "../../interfaces/payment-information/sepa-payment";
import {BusinessPostalAddress} from "../address/business-postal-address";


export class SEPAPaymentInformation implements ISEPAPaymentInformation{
    /**
     * @inheritDoc
     */
    debitor: BusinessPostalAddress | PrivatePostalAddress;

    /**
     * @inheritDoc
     */
    creditor: SEPAInformation & (BusinessPostalAddress | PrivatePostalAddress);
}
