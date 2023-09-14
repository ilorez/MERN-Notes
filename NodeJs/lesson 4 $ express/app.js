const express = require('express');
const app = express()
app.listen(3000)
app.get('/', (req, res) => {
    // res.send("<p>Hello world</p>");
    res.sendFile('./data/page.html', { root: __dirname });

})

app.get('/about', (req, res) => {
    // res.send("<p>Hello world</p>");
    res.sendFile('./data/about.html', { root: __dirname });

})

// redirect
app.get('/about-me', (req, res) => {
    res.redirect('/about')
})

// 404 page
app.use((req, res) => {
    res.status(404).sendFile('./data/404.html', { root: __dirname })
})






