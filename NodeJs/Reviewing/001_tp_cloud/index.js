const express = require('express')

const app = express()

const parking = require('./parkings.json')
app.use(express.json())

app.get('/parkings',(req,res)=>{
    res.status(200).json(parking)
})



server.listen(3000, 'localhost', () => {
    console.log('lisening for request on port 3000')
});
