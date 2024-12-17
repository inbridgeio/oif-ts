import {DiscountType} from "../enums/discount.enum";
import {IInvoiceItemWithDiscount} from "./invoice-item-with-discount";
import {IInvoiceItem} from "./base-invoice-item";


export interface IInvoiceItemWithoutDiscount extends IInvoiceItem {

    addDiscount(discount: number, type: DiscountType): IInvoiceItemWithDiscount;
}