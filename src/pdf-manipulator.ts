import {
    decodePDFRawStream,
    PDFArray,
    PDFDict,
    PDFDocument,
    PDFHexString,
    PDFName,
    PDFRawStream,
    PDFStream,
    PDFString
} from "pdf-lib";
import {Invoice} from "./lib/types/invoice";
import {SchemaProvider} from "./schema-provider.js";
import {FileNotFoundException} from "./lib/exceptions/file-not-found.exception";
import 'reflect-metadata';


export async function addOIFToPdf(invoice: Invoice, buffer: Buffer) {
    const pdfDoc = await PDFDocument.load(buffer);

    const jsonString = await SchemaProvider.stringify(invoice);
    await pdfDoc.attach(Buffer.from(jsonString), 'inbridge-oif.json');

    pdfDoc.setKeywords(['OIF Invoice generated. More under https://github.com/inbridgeio/open-invoice-format', 'Created with OIF Integration Library'])

    if(!pdfDoc.getCreationDate()) {
        pdfDoc.setCreationDate(new Date());
    }

    return pdfDoc.save();
}

/**
 *
 * @param buffer
 */
export async function getOIFFromPdf(buffer: Buffer): Promise<Invoice> {
    const pdfDoc = await PDFDocument.load(buffer);

    const rawAttachments = await extractRawAttachments(pdfDoc);
    const attachment = rawAttachments.find(({ fileName }) => fileName.decodeText() === 'inbridge-oif.json');

    if (!attachment) {
        throw new FileNotFoundException('Couldn\'t extract OIF attachment in the PDF');
    }

    const stream = attachment.fileSpec
        .lookup(PDFName.of('EF'), PDFDict)
        .lookup(PDFName.of('F'), PDFStream) as PDFRawStream;

    const json = new TextDecoder().decode(decodePDFRawStream(stream).decode())

    return SchemaProvider.parse(json);
}

async function extractRawAttachments(pdfDoc: PDFDocument) {
    if (!pdfDoc.catalog.has(PDFName.of('Names'))) return [];
    const Names = pdfDoc.catalog.lookup(PDFName.of('Names'), PDFDict);

    if (!Names.has(PDFName.of('EmbeddedFiles'))) return [];
    const EmbeddedFiles = Names.lookup(PDFName.of('EmbeddedFiles'), PDFDict);

    if (!EmbeddedFiles.has(PDFName.of('Names'))) return [];
    const EFNames = EmbeddedFiles.lookup(PDFName.of('Names'), PDFArray);

    const rawAttachments = [];
    for (let idx = 0, len = EFNames.size(); idx < len; idx += 2) {
        const fileName = EFNames.lookup(idx) as PDFHexString | PDFString;
        const fileSpec = EFNames.lookup(idx + 1, PDFDict);
        rawAttachments.push({ fileName, fileSpec });
    }

    return rawAttachments;
}