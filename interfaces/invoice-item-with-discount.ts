import {DiscountType} from "../enums/discount.enum";
import {IInvoiceItem} from "./base-invoice-item";

export interface IInvoiceItemWithDiscount extends IInvoiceItem {
    discount: number;
    discountType: DiscountType;
}