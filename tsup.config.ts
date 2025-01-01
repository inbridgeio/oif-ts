import {defineConfig} from 'tsup';

export default defineConfig({
    entry: ['src'], // Replace with your entry file(s)
    format: ['esm'],         // Output format (ESM)
    dts: true,               // Generate .d.ts files
    clean: true,             // Clean the dist folder before each build
    target: 'es6',           // Specify target environment,
    splitting: false,         // Enable code splitting,
    minify: true,             // Minify file in production mode
});