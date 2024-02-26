const express = require('express');
// midlleware morgan
const morgan = require("morgan")
const mongoose = require("mongoose")
const blogRouter = require("./routes/blogRoute")

// express app
const app = express();

// acces to database mongodb
const dbc = 'mongodb+srv://zozo:159159@ilorez.gm9xflf.mongodb.net/learn?retryWrites=true&w=majority'
mongoose.connect(dbc, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => app.listen(3000))
  .catch((err) => console.log(err))
  ;


// register view engine
app.set('view engine', 'ejs');
// app.set('views', 'myviews');

// middlware
app.use(express.static(`public`))
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.redirect('blogs')
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});


// blog routes
app.use('/blogs', blogRouter)

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
