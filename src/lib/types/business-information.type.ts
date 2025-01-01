import {Address} from "./address.type";

export type BusinessInformation = {
    /**
     * @description Company name
     */
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

    contact: {
        firstname?: string;
        lastname?: string;
        phoneNumber?: string;
        email: string;
    }
} & Address;