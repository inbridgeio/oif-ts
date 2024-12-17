import {SEPAInformation} from "../../types/sepa-information.type";
import {IPostalAddress} from "../address/postal-address";
import {PrivateContact} from "../../classes/address/private-contact";
import {BusinessContact} from "../../classes/address/business-contact";

export interface ISEPAPaymentInformation {
    debitor: IPostalAddress<BusinessContact> | IPostalAddress<PrivateContact>;

    creditor: SEPAInformation & (IPostalAddress<BusinessContact> | IPostalAddress<PrivateContact>);
}
