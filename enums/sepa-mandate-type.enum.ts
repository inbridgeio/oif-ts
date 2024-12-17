/**
 * Enum representing the different types of SEPA mandates.
 * 
 * - 'one_off': A one-time mandate for a single payment. 
 *              The mandate becomes invalid after the payment is processed.
 *              Example: One-time online purchases.
 * 
 * - 'recurring': A recurring mandate for regular payments. 
 *                The mandate remains valid until explicitly revoked.
 *                Example: Subscriptions, rent payments.
 * 
 * - 'b2b': A business-to-business (B2B) mandate for corporate transactions. 
 *          Requires the payer's bank to validate the mandate before processing. 
 *          Payments cannot be reversed after processing.
 *          Example: Payments between companies.
 */
export enum SEPAMandateType {
    ONE_OFF = 'one_off',
    RECURRING = 'recurring',
    B2B = 'b2b'
};