import { CountryCode } from "../../enums/country-code.enum";
import {IPostalAddress} from "../../interfaces/address/postal-address";
import {PrivateContact} from "./private-contact";

export class PrivatePostalAddress implements IPostalAddress<PrivateContact> {
    companyName: string;
    street: string;
    city: string;
    zip: string;
    country: CountryCode;

    duns?: string;
    vatId: string;
    taxId?: string

    contact: PrivateContact;
}
