import {CountryCode} from "../enums/country-code.enum";

export type Address = {
    street: string;
    city: string;
    zip: string;
    country: CountryCode;
}