import {getOIFFromPdf} from "../src/pdf-manipulator";
import {readFileSync} from "fs";
import {join} from "path";

const pdfPath = readFileSync(join(__dirname, '..', 'test-files','oif.pdf'));


(async () => {
    const invoice = await getOIFFromPdf(pdfPath);
})()