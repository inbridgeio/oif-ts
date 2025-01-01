import {plainToInstance, Transform, Type} from "class-transformer";
import {InvoiceItem} from "../types/invoice-item";
import {InvoiceItemWithDiscount} from "./invoice-item-with-discount";
import {CorrectingInvoiceData} from "../types/correcting-invoice-data";
import {InvoiceType} from "../enums/invoice-type.enum";
import {PaymentInformation} from "../types/payment-information";
import {InvoiceItemWithoutDiscount} from "./invoice-item-without-discount";
import "reflect-metadata";
import {getPaymentInformationConstructorByType} from "../helper-fns/payment-information-map.fn";
import {SchemaVersion} from "../../schema-provider";

export class BaseInvoice {

    version: Exclude<SchemaVersion, 'latest'>;
    /**
     * The id of the invoice
     */
    id: string;

    /**
     * The date when the invoice was created
     */
    @Type(() => Date)
    createdAt: Date = new Date();

    /**
     * The date when the invoice was last updated
     */
    @Type(() => Date)
    servicePeriod: { start: Date; end: Date; };


    /**
     * Type of the invoice
     */
    type: InvoiceType;

    /**
     * The payment information of the invoice
     */

    @Transform(({value}) => {
        return plainToInstance(getPaymentInformationConstructorByType(value.paymentType), value);
    })
    paymentInformation: PaymentInformation;


    /**
     * The items of the invoice
     * @param InvoiceItem[] items
     */
    @Transform(({ value }: any) => {
        return value.map((item: object): InvoiceItem => {
            if ('discount' in item) {
                return plainToInstance(InvoiceItemWithDiscount, item);
            }

            return plainToInstance(InvoiceItemWithoutDiscount, item);
        });
    })
    items: InvoiceItem[] = [];

    /**
     * The net price sum of the invoice
     */
    get netPriceSum() {
        return this.items.reduce((acc, item) => acc + item.netPrice, 0);
    }

    /**
     * The tax sum of the invoice
     */
    get taxSum() {
        return this.items.reduce((acc, item) => acc + item.tax, 0);
    }

    /**
     * The gross price sum of the invoice
     */
    get grossPriceSum() {
        return this.items.reduce((acc, item) => acc + item.grossPrice, 0);
    }

    /**
     * When this is a correcting invoice, this field contains the data of the invoice that will be corrected
     */
    correction?: CorrectingInvoiceData;

    constructor(id: string, servicePeriod: {start: Date, end: Date}) {
        this.id = id;
        this.servicePeriod = servicePeriod
    }
}