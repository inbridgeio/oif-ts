export type CreditCardInformationType = {
    /**
     * The last four digits of the credit card number.
     * @pattern ^\d{4}$
     */
    "lastFourDigits": string,

    /**
     * The expiration date of the credit card.
     * @pattern ^(0[1-9]|1[0-2])\/[0-9]{2,4}$
     */
    "expirationDate": string,

    /**
     * The cardholder name as it appears on the credit card.
     */
    "cardholderName": string
}