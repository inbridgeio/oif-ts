import Ajv, {ValidateFunction} from "ajv";
import addFormats from "ajv-formats";
import {Invoice} from "./lib/types/invoice.js";
import axios from "axios";
import {plainToInstance} from "class-transformer";
import {InvoiceType} from "./lib/enums/invoice-type.enum.js";

import {PartialInvoice} from "./lib/classes/invoice-types/partial-invoice.js";
import {RecurringInvoice} from "./lib/classes/invoice-types/recurring-invoice.js";
import {DefaultInvoice} from "./lib/classes/invoice-types/default-invoice.js";
import {CancellationInvoice} from "./lib/classes/invoice-types/cancellation-invoice.js";
import {InvalidOIFException} from "./lib/exceptions/invalid-oif.exception";
import 'reflect-metadata';

export const SchemaVersions = [
    'latest',
    '2025.01',
] as const;

export type SchemaVersion = typeof SchemaVersions[number];

export class SchemaProvider {
    private static _instance: SchemaProvider;
    private _validateFn: ValidateFunction;
    private readonly ajv: Ajv;
    private _version: SchemaVersion = SchemaVersions[1];

    private readonly _invoiceTypeMap: any = {
        [InvoiceType.PARTIAL_INVOICE]: PartialInvoice,
        [InvoiceType.RECURRING_INVOICE]: RecurringInvoice,
        [InvoiceType.INVOICE]: DefaultInvoice,
        [InvoiceType.CANCELLATION]: CancellationInvoice
    }

    get isHeated(): boolean {
        return !!this._validateFn;
    }

    private constructor() {
        this.ajv = new Ajv({ removeAdditional: true });
        addFormats(this.ajv);
    }

    private static _getInstance(): SchemaProvider {
        if (!SchemaProvider._instance) {
            SchemaProvider._instance = new SchemaProvider();
        }
        return SchemaProvider._instance;
    }

    private async _load() {
        let url = `https://github.com/inbridgeio/open-invoice-format/releases/download/${this._version}/schema.json`;

        if(this._version === 'latest') {
            url = 'https://raw.githubusercontent.com/inbridgeio/open-invoice-format/refs/heads/main/schema.json';
        }

        const schema = await axios.get(url).then((res: any) => res.data);

        this._version = schema.definitions.SCHEMA_VERSION.const as SchemaVersion;
        this._validateFn = this.ajv.compile(schema);
    }

    private async _validate<T extends { type: InvoiceType }>(obj: T): Promise<T|null> {
        if (!this.isHeated) {
            await this._load();
        }

        const isValid = this._validateFn(obj);

        if(!isValid) {
            return null;
        }

        return plainToInstance(this._invoiceTypeMap[obj.type] as any, obj)
    }

    /**
     * Set the schema version to use
     * @param version
     */
    static async setVersion(version: SchemaVersion) {
        const instance = SchemaProvider._getInstance();
        instance._version = version;
        await instance._load();
    }

    /**
     * Stringify an OIF object
     * @param invoice
     */
    static async stringify(invoice: Invoice): Promise<string> {
        const instance = SchemaProvider._getInstance();
        const obj = JSON.parse(JSON.stringify(invoice));

        obj.version = instance._version;
        if(obj._version === 'latest') {
            obj._version = SchemaVersions[1];
        }

        const isValid = await instance._validate(obj);

        if (!isValid) {
            console.error(instance.ajv.errorsText(instance._validateFn.errors))
            // throw new InvalidOIFException(instance.ajv.errorsText(instance._validateFn.errors));
        }

        return JSON.stringify(obj);
    }

    /**
     * Parse an JSON to an OIF object
     * @param json
     */
    static async parse<T extends Invoice>(json: string): Promise<T> {
        const instance = SchemaProvider._getInstance();
        const obj = await instance._validate<T>(JSON.parse(json));

        if (!obj) {
            throw new InvalidOIFException(instance.ajv.errorsText(instance._validateFn.errors));
        }

        return obj;
    }
}