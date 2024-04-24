#!/usr/bin/node
const fs = require('fs');
const path = require('path');

function readFileContent(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf-8');
        console.log(content);
    } catch (error) {
        console.error(`Error reading file: ${error.message}`);
    }
}

if (require.main === module) {
    if (process.argv.length < 3) {
        console.error('Usage: node read_file.js <file_path>');
    } else {
        readFileContent(process.argv[2]);
    }
}
