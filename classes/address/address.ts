import { CountryCode } from "../../enums/country-code.enum";
import {IAddress} from "../../interfaces/address/address";

export class Address implements IAddress {
    street: string;
    city: string;
    zip: string;
    country: CountryCode;
}