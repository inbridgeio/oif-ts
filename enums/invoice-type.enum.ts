/**
 * Enum representing the different types of invoices.
 * 
 * - 'invoice': A standard invoice issued after the completion of a transaction or project.
 *              It summarizes all charges and confirms the total amount due.
 *              Example: An invoice sent after delivering a product or service.
 * 
 * - 'partial_invoice': A partial invoice issued for a portion of the total amount due.
 *                      Typically used in cases where payments are split into installments or milestones.
 *                      Example: An invoice for the first phase of a project.
 * 
 * - 'recurring_invoice': A recurring invoice issued at regular intervals for ongoing services or subscriptions.
 *
 * - 'cancellation_invoice': An invoice issued to cancel a previous invoice.
 */
export enum InvoiceType {
    INVOICE = 'invoice',
    PARTIAL_INVOICE = 'partial_invoice',
    RECURRING_INVOICE = 'recurring_invoice',
    CANCELLATION = 'cancellation_invoice'
};
