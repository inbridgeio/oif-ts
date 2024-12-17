import {CountryCode} from "../enums/country-code.enum";
import {Currency} from "../enums/currency.enum";
import {InvoiceItemUnit} from "../enums/invoice-item-unit.enum";
import {InvoiceType} from "../enums/invoice-type.enum";
import {DefaultInvoice} from "../classes/invoice-types/default-invoice";
import {InvoiceItem} from "../types/invoice-item";


const invoice: DefaultInvoice = {
    version: '0.1',
    type: InvoiceType.INVOICE,
    createdAt: new Date(),
    id: '123456',
    servicePeriod: {
        start: new Date(),
        end: new Date(),
    },
    
    paymentInformation: {
        debitor: {
            // SEPAInformation properties
            iban: "DE89370400440532013000",
            bic: "COBADEFFXXX",
            // CompanyPostialAddress properties
            companyName: "Example Company",
            vatId: "DE123456789",
            city: "Berlin",
            country: CountryCode.DE,
            street: "Example Street 1",
            zip: "12345",
            duns: "123456789",
            contact: {
                email: "contact@example.com"
            }
        },
        creditor: {
            iban: "DE89370400440532013000",
            bic: "COBADEFFXXX",
            companyName: "Creditor Company",
            vatId: "DE987654321",
            city: "Munich",
            country: CountryCode.DE,
            street: "Creditor Street 2",
            zip: "54321",
            duns: "987654321",
            contact: {
                email: "creditor@example.com"
            }
        }
    },
    items: [
        {
            currency: Currency.EURO,
            description: "Example Item",
            price: 100.00,
            quantity: 1,
            taxRate: 19,
            unit: InvoiceItemUnit.PIECE,
            id: "1",
            netPrice: 100.00,
            grossPrice: 119.00,
        } as InvoiceItem
    ],
}

console.log(JSON.stringify(invoice, null, 2));