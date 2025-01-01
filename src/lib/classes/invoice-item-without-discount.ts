import {DiscountType} from "../enums/discount.enum";
import {InvoiceItemWithDiscount} from "./invoice-item-with-discount";
import {InvoiceItemUnit} from "../enums/invoice-item-unit.enum";
import {Currency} from "../enums/currency.enum";

export class InvoiceItemWithoutDiscount {
    /**
     * Unique identifier of the item
     */
    id: string = '';

    /**
     * Description of the item
     */
    description: string = '';

    /**
     * The quantity of the item
     */
    quantity: number = 1;

    /**
     * The unit of the item
     * @see InvoiceItemUnit
     */
    unit: InvoiceItemUnit = InvoiceItemUnit.PIECE;

    /**
     * The price of the item
     */
    price: number;

    /**
     * The currency of the item
     * @see Currency
     */
    currency: Currency = Currency.EUR;

    /**
     * The tax rate of the item
     */
    taxRate: number = 0;

    constructor(id: string, price: number, unit?: InvoiceItemUnit, description?: string) {
        this.id = id;
        this.price = price;
        this.description = description || '';
        this.unit = unit || InvoiceItemUnit.PIECE;
    }

    /**
     * The net price of the item
     */
    get netPrice(): number {
        return this.price * this.quantity;
    };


    /**
     * The tax of the item
     */
    get tax(): number {
        return this.netPrice * (this.taxRate / 100);
    }


    /**
     * The gross price of the item
     */
    get grossPrice(): number {
        return this.netPrice + this.tax;
    };


    /**
     * Adds a discount to the item and mutates the object to an InvoiceItemWithDiscount
     * @param discount The amount of the discount
     * @param type The type of the discount
     * @see DiscountType
     * @returns void
     */
    addDiscount(discount: number, type: DiscountType): void {
        Object.assign(this, {discount, discountType: type});
        Object.setPrototypeOf(this, InvoiceItemWithDiscount.prototype);
    }
}