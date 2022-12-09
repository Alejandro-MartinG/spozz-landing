import { stringify } from 'csv';
import fs from 'node:fs';

const fileName = 'saved_forms.csv'

export const saveRowsInCSV = (row) => {
    const writableStream = fs.createWriteStream(fileName, { flags: 'a' });
    const stringifyParams = !fs.existsSync(fileName) ? { header: true } : { header: false };
    const stringifier = stringify(stringifyParams);

    stringifier.on('error', function (err) {
        console.error(err.message);
    });
    writableStream.on('error', function (err) {
        console.log(err);
    });

    console.log(row);
    stringifier.write(row);
    stringifier.pipe(writableStream);
    stringifier.end();
    writableStream.end();

    console.log('New row added to csv');
}