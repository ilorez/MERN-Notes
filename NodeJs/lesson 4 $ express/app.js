const express = require('express');
const app = express()
app.get('/', (req, res) => {
    res.send("<p>Hello world</p>");
})
app.listen(3000)