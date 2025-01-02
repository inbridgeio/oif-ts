<p align="center">
  <img src="https://avatars.githubusercontent.com/u/189235068?s=200" width="200px" align="center" alt="OIF logo" />
  <h1 align="center"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" width="25"> OIF Integration</h1>

  <p align="center">
   <a href="https://github.com/inbridgeio/oif-ts"><img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/inbridgeio/oif-ts"></a>
   <a href="https://www.npmjs.com/@inbridge/oif-ts"><img alt="NPM Downloads" src="https://img.shields.io/npm/dm/%40inbridge%2Foif-ts"></a>
   <a href="https://www.npmjs.com/@inbridge/oif-ts"><img alt="NPM Version" src="https://img.shields.io/npm/v/%40inbridge%2Foif-ts"></a>
   <a href="https://github.com/inbridgeio/oif-ts/blob/main/LICENSE"><img alt="GitHub License" src="https://img.shields.io/github/license/inbridgeio/oif-ts"></a>
   </p>
  <p align="center">
    This library is the TypeScript integration of the Open Invoice Format (OIF) schema.<br>  
    Create PDFs in OIF Format with ease and parse/validate JSON back and forth.
  </p>
</p>

## What is the Open Invoice Format

An open-source, JSON-based schema for invoices. This project is designed to offer a simple and reliable alternative to
complex standards like **ZUGFeRD** and **XRechnung**. Built on [JSON schema](https://json-schema.org), it ensures easy
validation and parsing across all programming languages.  
Have a look at the [Open Invoice Format GitHub Repository](https://github.com/inbridgeio/open-invoice-format)

---

## Table of Contents

1. [Schema Details](#schema-details)
    - [How to use inside a PDF](#how-to-use-inside-a-pdf)
2. [Getting Started](#getting-started)
    - [How to set specific Schema version](#how-to-set-specific-schema-version)
    - [Parsing JSON](#parsing-json)
        - [OIF JSON to Obj](#oif-json-to-obj)
        - [Obj to OIF JSON](#obj-to-oif-json)
    - [Handling OIF PDFs](#handling-oif-pdfs)
        - [How to extract the OIF JSON from a PDF](#how-to-extract-the-oif-json-from-a-pdf)
        - [How to add the OIF JSON to a PDF](#how-to-add-the-oif-json-to-a-pdf)
3. [More Integration Libraries](#more-integration-libraries)
4. [Contributing](#contributing)
5. [Questions or Feedback?](#questions-or-feedback)

---

## Schema details

### How to use inside a PDF:

To use the open invoice format like ZugFeRD inside a PDF. Your JSON should be attached as `inbridge-oif.json` to the
PDF.
By using one of our [integration libraries](#integration-libraries) you can work with OIF as easy as pie!

For the full schema, check out the [OIF GitHub Repository](https://github.com/inbridgeio/open-invoice-format)

---

## Getting Started

The library loads based on your input the schema out of the OIF GitHub Repository to validate it.

First, install the package via npm:

```bash
npm install @inbridge/oif-ts
```

### How to set specific Schema version

You can set a specific version of the schema by passing the version as a string. Autocomplete for the versions is
available.
Additionally, you can use `latest` as version, to get the latest schema from main Branch of
the [OIF GitHub Repository](https://github.com/inbridgeio/open-invoice-format).

```typescript
import {SchemaProvider} from "./schema-provider";

(async () => {
    try {
        await SchemaProvider.setVersion('latest');
    } catch (e) {
        console.error(e);
    }
})()
```

---  

### Parsing JSON

### OIF JSON to Obj

```typescript
import {SchemaProvider} from "./schema-provider";

const oifJson = /* your OIF JSON String */;

(async () => {
    try {
        const obj = await SchemaProvicer.parse<T>(oifJson);

        console.log(obj);
    } catch (e) {
        console.error(e);
    }
})()
```

You can pass `T` for example as DefaultInvoice to predefine the output type for auto complete. Or if you need then dont.

### Obj to OIF JSON

```typescript
import {SchemaProvider} from "./schema-provider";

const oifJson = /* your OIF JSON String */;

(async () => {
    try {
        const obj = await SchemaProvicer.stringify(oifJson);

        console.log(obj);
    } catch (e) {
        console.error(e);
    }
})()
```

---

### Handling OIF PDFs

To handle PDFs containing the OIF JSON we use [pdf-lib](https://github.com/Hopding/pdf-lib).

### How to extract the OIF JSON from a PDF:

```typescript
import {getOIFFromPdf} from "@inbridgeio/oif/pdf-manipulator";
import {readFileSync} from "fs";
import {join} from "path";

const file = readFileSync(join(__dirname, '..', 'test-files', 'oif.pdf'));


(async () => {
    console.log(await getOIFFromPdf(file));
})()
```

As file, you can use a `Buffer` or a `UInt8Array`. Here the variable `file` is a Buffer.
It will return the parsed Invoice Obj or throw an `InvalidOIFException` if the JSON is invalid.

### How to add the OIF JSON to a PDF:

If you generated a PDF out of your invoice, you can easily add the JSON and if its valid it will get added to the PDF.
Otherwise it throws an `InvalidOIFException`.

```typescript
import {addOIFToPdf} from "@inbridgeio/oif/pdf-manipulator";
import {writeFileSync} from "fs";

const invoiceObj = /* your OIF Object */;

(async () => {
    try {
        const pdf = await addOIFToPdf(invoiceObj);

        // Do something with the pdf
        writeFileSync('invoice.pdf', pdf);
    } catch (e) {
        console.error(e);
    }
})()
```

## More Integration Libraries:

[`@inbridgeio/oif-ts`](https://github.com/inbridgeio/oif-ts): Work with OIF in TypeScript and JavaScript  
[`Java`](#): coming soon  
[`PHP`](#): coming soon  
[`Python`](#): coming soon

[Contribute your own](#contributing)

---

## Contributing

We welcome contributions! Feel free to submit pull requests or open issues for feature requests or bugs.  
[How to contribute on GitHub](https://docs.github.com/en/get-started/exploring-projects-on-github/contributing-to-a-project)

---

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---

## Questions or Feedback?

Create an issue or reach out via [GitHub Discussions](https://github.com/inbridgeio/open-invoice-format/discussions).
