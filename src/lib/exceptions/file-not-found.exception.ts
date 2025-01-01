export class FileNotFoundException extends Error {
    constructor(message: any) {
        super(message);
        this.name = "FileNotFoundException";
    }
}