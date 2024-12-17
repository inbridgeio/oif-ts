import {DiscountType} from "../enums/discount.enum";
import {IInvoiceItemWithDiscount} from "../interfaces/invoice-item-with-discount";
import {Currency} from "../enums/currency.enum";
import {InvoiceItemUnit} from "../enums/invoice-item-unit.enum";

export class InvoiceItemWithDiscount implements IInvoiceItemWithDiscount {
    id: string;
    description: string;
    quantity: number;
    unit: InvoiceItemUnit;
    price: number;
    currency: Currency;
    taxRate: number;
    discount: number;
    discountType: DiscountType;

    get netPrice(): number {
        if(this.discountType === DiscountType.FIXED) {
            return this.price - this.discount;
        }

        if(this.discountType === DiscountType.PERCENTAGE) {
            return this.price - (this.price * this.discount);
        }

        return this.price;
    }

    get tax(): number {
        throw new Error("Method not implemented.");
    }

    get grossPrice(): number {
        throw new Error("Method not implemented.");
    }
}