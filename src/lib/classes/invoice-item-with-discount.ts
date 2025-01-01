import {DiscountType} from "../enums/discount.enum";
import {InvoiceItemWithoutDiscount} from "./invoice-item-without-discount";

export class InvoiceItemWithDiscount extends InvoiceItemWithoutDiscount {
    discount: number = 0;
    discountType: DiscountType = DiscountType.FIXED;

    get discountAmount(): number {
        if (this.discountType === DiscountType.PERCENTAGE) {
            return this.price * this.quantity * (this.discount / 100);
        }

        return this.discount;
    }

    get netPrice(): number {
        return this.price * this.quantity - this.discountAmount;
    };

}