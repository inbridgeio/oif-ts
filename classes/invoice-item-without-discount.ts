import {IInvoiceItemWithoutDiscount} from "../interfaces/invoice-item-without-discount";
import {DiscountType} from "../enums/discount.enum";
import {IInvoiceItemWithDiscount} from "../interfaces/invoice-item-with-discount";
import {InvoiceItemWithDiscount} from "./invoice-item-with-discount";
import {InvoiceItemUnit} from "../enums/invoice-item-unit.enum";
import {Currency} from "../enums/currency.enum";

export class InvoiceItemWithoutDiscount implements IInvoiceItemWithoutDiscount {
    id: string;
    description: string;
    quantity: number;
    unit: InvoiceItemUnit;
    price: number;
    currency: Currency;
    taxRate: number;

    get netPrice(): number {
        return this.price * this.quantity;
    };

    get tax(): number {
        return this.netPrice * this.taxRate;
    }

    get grossPrice(): number {
        return this.netPrice + this.tax;
    };

    addDiscount(discount: number, type: DiscountType): IInvoiceItemWithDiscount {
        return Object.assign(new InvoiceItemWithDiscount(), this, {discount, type});
    }
}