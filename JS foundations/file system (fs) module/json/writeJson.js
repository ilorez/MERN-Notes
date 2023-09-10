const fs = require('fs');
const myData = {
    name: 'zobair',
    age: 20,
    tels: ["+2126145874", "+21260155484545"]
}

// convert
const jsonString = JSON.stringify(myData, null, 2);

// write
fs.writeFile('output.json', jsonString, 'utf-8', (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('succes output.json')
})