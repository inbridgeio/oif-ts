export class InvalidOIFException extends Error {
    constructor(message: any) {
        super(message);
        this.name = "InvalidOIFException";
    }
}