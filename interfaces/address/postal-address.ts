import { IAddress} from "./address";
import {IBusinessContact} from "./business-contact";
import {IPrivateContact} from "./private-contact";

export interface IPostalAddress<T = IPrivateContact|IBusinessContact> extends IAddress{
    companyName: string;

    /**
     * @description D-U-N-S number
     */
    duns?: string;

    /**
     * @description VAT identification number
     */
    vatId: string;

    /**
     * @description Tax number
     */
    taxId?: string;

    contact: T;
}