const express = require('express');

// using morgan
const morgan = require('morgan')

// import parking.json
const joueurs = require('./joueurs.json')

// using express

const app = express()


// use third party middlware morgan 
app.use(morgan('dev'))

// start in code
app.get('/',(req,res)=>{
    res.setHeader('content-type', 'text/html');
    res.write('<body >');
    res.write('<p>hello world</p><br>');

    res.write('<h1>hello world</h1>');
    res.write('<h2>Hi Joueur</h2></body>');
    res.end()
})

app.get('/joueurs',(req,res)=>{
    res.status(200).json(joueurs)
})

app.get('/joueurs/:id',(req,res)=>{
    const id = req.params.id
    let jou = joueurs.find(j=>j.id == id)
    res.status(200).json(jou.idEquipe)
})

app.get('/team/:id',(req,res)=>{
    const id = req.params.id
    console.log(id)
    let team = joueurs.filter(j=>j.idEquipe == id)
    console.log(team)

    res.status(200).json(team)
})
app.get('/')


// listen to port 3000
app.listen(3000)