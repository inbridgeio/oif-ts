import {Address} from "./address.type";

export type PrivatePersonInformation = {
    contact: {
        firstname: string;
        lastname: string;
        phoneNumber?: string;
        email: string;
    }
} & Address;