import {DiscountType} from "../enums/discount.enum";
import {InvoiceItemWithoutDiscount} from "./invoice-item-without-discount";

export class InvoiceItemWithDiscount extends InvoiceItemWithoutDiscount {
    /**
     * The discount amount
     */
    discount: number = 0;
    /**
     * The type of the discount
     * @default DiscountType.FIXED
     * @see DiscountType
     */
    discountType: DiscountType = DiscountType.FIXED;
    /**
     * The reason for the discount
     */
    discountReason: string = '';


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