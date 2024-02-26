const fs = require('fs');
const readStream = fs.createReadStream('./data/blogsReaded.txt', { encoding: 'utf-8' });
const writeStream = fs.createWriteStream('./data/blogsWrited.txt');


// readStream.on('data', (chunk) => {
//     console.log("************************")
//     console.log(chunk)
//     ///
//     writeStream.write('\n****New Chunk*****\n')
//     writeStream.write(chunk)
// })
readStream.pipe(writeStream);