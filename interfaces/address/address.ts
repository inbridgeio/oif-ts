import { CountryCode } from "../../enums/country-code.enum";

/**
 * Represents a physical address consisting of street, city, zip code, and country.
 * This class is used to store and manage address details for various use cases like shipping, billing, etc.
 */
export interface IAddress {
    /**
     * The street name or address line, such as "123 Elm Street" or "Main St".
     */
    street: string;

    /**
     * The city or town associated with the address, like "New York" or "Berlin".
     */
    city: string;

    /**
     * The postal or ZIP code, such as "10001" or "10115".
     */
    zip: string;

    /**
     * The country code in ISO 3166-1 alpha-2 format, like "US" or "DE".
     */
    country: CountryCode;
}
