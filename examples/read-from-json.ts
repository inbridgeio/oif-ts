import {readFileSync} from "fs";
import {SchemaProvider} from "../src/schema-provider";
import {DefaultInvoice} from "../src/lib/classes/invoice-types/default-invoice";
import {join} from "path";

const json = readFileSync(join(__dirname, '..', 'test-files', 'data.json'), "utf-8");

(async () => {
    const obj: DefaultInvoice = await SchemaProvider.parse<DefaultInvoice>(json);
    console.log(obj);
})();