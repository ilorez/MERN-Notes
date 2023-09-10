const fs = require('fs');

// read
fs.readFile('data.json', 'utf-8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    try {
        const jsonObj = JSON.parse(data);
        console.log(jsonObj.name)
    } catch (error) {
        console.error("Error parsing Json:", error)
    }

})


// write


