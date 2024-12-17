export type SignatureInformation = {
    /**
     * @description Date of the signature.
     */
    date: Date;
    /**
     * @description Can be an url to a provided signature document or a base64 encoded signature.
     * @format url|base64
     */
    signature: string;
}