import {IBusinessContact} from "../../interfaces/address/business-contact";

export class BusinessContact implements IBusinessContact {
    firstname?: string;
    lastname?: string;
    phoneNumber?: string;
    email: string;
}