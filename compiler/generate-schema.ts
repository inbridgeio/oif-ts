// @ts-ignore
import {Config, createGenerator} from "ts-json-schema-generator";
import {writeFileSync} from "fs";

const config: Config = {
    path: "../classes/invoice-types/*.ts",
    tsconfig: "../tsconfig.json",
    type: "*", // Or <type-name> if you want to generate schema for that one type only
};

const outputPath = "schema.json";

const schema = createGenerator(config).createSchema(config.type);
const schemaString = JSON.stringify(schema, null, 2);
writeFileSync(outputPath, schemaString);