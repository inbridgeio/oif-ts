import { CountryCode } from "../../enums/country-code.enum";
import {BusinessContact} from "./business-contact";
import {IPostalAddress} from "../../interfaces/address/postal-address";


export class BusinessPostalAddress implements IPostalAddress<BusinessContact> {
    companyName: string;
    street: string;
    city: string;
    zip: string;
    country: CountryCode;

    duns?: string;
    vatId: string;
    taxId?: string;

    contact: BusinessContact;
}