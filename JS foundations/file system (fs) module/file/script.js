const fs = require('fs');

//read
fs.readFile('text.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data)
})

// wirte
fs.writeFile('newfile.txt', 'Hello Qiyou', (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('success')
})
// Other File Operations:

// Node.js provides many other methods for working with files, such as fs.readdir for reading directories, fs.rename for renaming files, fs.unlink for deleting files, and more. You can refer to the official Node.js documentation for a comprehensive list of methods and their descriptions: Node.js fs Module Documentation
