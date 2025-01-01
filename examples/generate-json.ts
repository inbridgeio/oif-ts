import {readFileSync, writeFileSync} from "fs";
import {DefaultInvoice} from "../src/lib/classes/invoice-types/default-invoice";
import {join} from "path";
import {CountryCode} from "../src/lib/enums/country-code.enum";
import {PaymentInformationType} from "../src/lib/enums/payment-information-type.enum";
import {SchemaProvider} from "../src/schema-provider";
import {InvoiceItemUnit} from "../src/lib/enums/invoice-item-unit.enum";
import {DiscountType} from "../src/lib/enums/discount.enum";
import {faker} from "@faker-js/faker/locale/de";
import {plainToInstance} from "class-transformer";
import {InvoiceItemWithoutDiscount} from "../src/lib/classes/invoice-item-without-discount";
import {SEPAPayment} from "../src/lib/classes/payment-information/sepa-payment";
import {CashPayment} from "../src/lib/classes/payment-information/cash-payment";
import {CreditCardPayment} from "../src/lib/classes/payment-information/credit-card-payment";
import {SWIFTPayment} from "../src/lib/classes/payment-information/swift-payment";
import {SEPAMandatePayment} from "../src/lib/classes/payment-information/sepa-mandate-payment";
import {SEPAMandateType} from "../src/lib/enums/sepa-mandate-type.enum";

const pdfPath = join(__dirname, '..', 'test-files', 'oif.pdf');
const json = readFileSync(join(__dirname, '..', 'test-files', 'data.json'), "utf-8");
const rawPdf = readFileSync(join(__dirname, '..', 'test-files', 'raw-invoice.pdf'));

const randomVatId = () => faker.helpers.fromRegExp("[ABCDEFGHJNPQRSUVW][0-9]{7}[0-9A-J]");
const randomId = () => faker.helpers.fromRegExp("[A-Z0-9]{8}");
const randomInvoiceId = () => "INV-2024-" + randomId();

const phoneNumberOrUndefined = () => {
    if (faker.number.int({min: 0, max: 1}) === 1) {
        const map = [
            'human',
            'international',
            'national'
        ];
        return faker.phone.number({style: map[faker.number.int({min: 0, max: map.length - 1})] as any});
    }

    return undefined;
}

const generateCompany = () => {
    return {
        companyName: faker.company.name(),
        vatId: randomVatId(),
        street: faker.location.streetAddress(),
        city: faker.location.city(),
        zip: faker.location.zipCode(),
        country: CountryCode.DE,
        contact: {
            phoneNumber: phoneNumberOrUndefined(),
            email: faker.internet.email()
        },
    };
};
const generatePrivatePerson = () => {
    return {
        street: faker.location.streetAddress(),
        city: faker.location.city(),
        zip: faker.location.zipCode(),
        country: CountryCode.DE,
        contact: {
            firstname: faker.person.firstName(),
            lastname: faker.person.lastName(),
            phoneNumber: phoneNumberOrUndefined(),
            email: faker.internet.email()
        }
    };
};
const generateRandomPerson = () => {
    const persons = [
        generatePrivatePerson(),
        generateCompany()
    ]

    return persons[faker.number.int({min: 0, max: 1})] as any;
}

const randomPaymentInformation = () => {

    const paymentTypes: {
        [PaymentInformationType.SEPA_MANDATE]: () => SEPAMandatePayment,
        [PaymentInformationType.SEPA]: () => SEPAPayment,
        [PaymentInformationType.SWIFT]: () => SWIFTPayment,
        [PaymentInformationType.CREDIT_CARD]: () => CreditCardPayment,
        [PaymentInformationType.CASH]: () => CashPayment
    } = {
        [PaymentInformationType.SEPA_MANDATE]: () => {
            let signature = undefined;
            if(faker.number.int({min: 0, max: 1}) === 1) {
                signature = {
                    date: faker.date.recent(),
                    signature: faker.internet.url()
                }
            }

            const randomMandateType = () => {
               return Object.values(SEPAMandateType)[faker.number.int({
                   min: 0,
                   max: Object.values(SEPAMandateType).length - 1
               })];
            }

            return {
                paymentType: PaymentInformationType.SEPA_MANDATE,
                type: randomMandateType(),
                mandateId: randomId(),
                dueDate: faker.date.future(),
                signature: signature,
                debitor: {
                    ...generateRandomPerson(),
                    iban: faker.finance.iban(),
                    bic: faker.finance.bic()
                },
                creditor: {
                    ...generateRandomPerson(),
                    mandateReference: randomId()
                }
            }
        },
        [PaymentInformationType.SEPA]: () => {
            return {
                paymentType: PaymentInformationType.SEPA,
                creditor: {
                    ...generateRandomPerson(),
                    iban: faker.finance.iban(),
                    bic: faker.finance.bic()
                },
                debitor: {
                    ...generateRandomPerson()
                }
            }
        },
        [PaymentInformationType.SWIFT]: () => {
            return {
                paymentType: PaymentInformationType.SWIFT,
                creditor: {
                    ...generateRandomPerson(),
                    iban: faker.finance.iban(),
                    bic: faker.finance.bic()
                },
                debitor: {
                    ...generateRandomPerson()
                }
            }
        },
        [PaymentInformationType.CREDIT_CARD]: () => {
            return {
                paymentType: PaymentInformationType.CREDIT_CARD,
                creditor: {
                    ...generateRandomPerson(),
                },
                debitor: {
                    ...generateRandomPerson(),
                    lastFourDigits: faker.finance.creditCardNumber().slice(-4),
                    expirationDate: `${faker.number.int({min: 1, max: 12}).toString().padStart(2, '0')}/${faker.number.int({min: 25, max: 30})}`,
                    cardholderName: faker.person.fullName(),
                }
            }
        },
        [PaymentInformationType.CASH]: () => {
            return {
                paymentType: PaymentInformationType.CASH,
                creditor: {
                    ...generateRandomPerson(),
                },
                debitor: {
                    ...generateRandomPerson(),
                }
            }
        }
    }

    const keys = Object.keys(paymentTypes);
    const key = keys[faker.number.int({min: 0, max: keys.length - 1})] as PaymentInformationType;
    return paymentTypes[key]();
}

(async () => {

    const invoice = new DefaultInvoice(randomInvoiceId(), {start: new Date(), end: new Date()});
    invoice.paymentInformation = randomPaymentInformation();


    for (let i = 0; i < faker.number.int({min: 2, max: 10}); i++) {
        const item = plainToInstance(InvoiceItemWithoutDiscount, {
            id: randomId(),
            description: faker.commerce.productName(),
            unit: InvoiceItemUnit.PIECE,
            quantity: faker.number.int({min: 1, max: 100}),
            price: faker.number.float({min: 1, max: 1000, fractionDigits: 2}),
            taxRate: 19
        });

        if (faker.number.int({min: 0, max: 1}) === 1) {
            const discountType = faker.number.int({
                min: 0,
                max: 1
            }) === 1 ? DiscountType.PERCENTAGE : DiscountType.FIXED;
            let discount = 0;

            if (discountType === DiscountType.PERCENTAGE) {
                discount = faker.number.int({min: 0, max: 100});
            } else {
                discount = faker.number.int({min: 0, max: item.netPrice});
            }

            item.addDiscount(discount, discountType);
        }

        invoice.items.push(item);
    }

    try {
        const json = await SchemaProvider.stringify(invoice);
        writeFileSync(join(__dirname, '..', 'test-files', 'data.json'), json);
    } catch (e) {
        console.error(e)
    }
})()