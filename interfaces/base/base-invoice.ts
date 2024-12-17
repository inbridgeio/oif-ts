import {CorrectingInvoiceData} from "../../types/correcting-invoice-data";
import {InvoiceType} from "../../enums/invoice-type.enum";

export interface IBaseInvoice {
    /**
     * @description The version of the invoice schema, you can find the schema at the @see URL
     * @see https://inbridge.io/schema/invoice/:version
     */
    version: '0.1';

    /**
     * @description The type of the invoice
     */
    type: InvoiceType;

    /**
     * @description The id of the invoice
     */
    id: string;

    /**
     * @description The date when the invoice was created
     */
    createdAt: Date;

    /**
     * @description When this is a correcting invoice, this field contains the data of the invoice that will be corrected
     */
    correction?: CorrectingInvoiceData;
}