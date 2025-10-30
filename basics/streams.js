const fs = require('fs');

readStream = fs.createReadStream('readfile.txt', { encoding: 'utf8' });
writeStream = fs.createWriteStream('output.txt', { encoding: 'utf8' });

// Manually handling data events

// readStream.on('data', (chunk) => {
//     console.log('Received chunk:', chunk);
//     writeStream.write(chunk);
// });

// Using pipe to connect read and write streams
readStream.pipe(writeStream);
