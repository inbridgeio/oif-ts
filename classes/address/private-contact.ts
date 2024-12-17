import {IPrivateContact} from "../../interfaces/address/private-contact";

export class PrivateContact implements IPrivateContact {
    firstname: string;
    lastname: string;
    phoneNumber?: string;
    email: string;
}