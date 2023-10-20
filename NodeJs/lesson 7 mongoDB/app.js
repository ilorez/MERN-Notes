const express = require('express');
// midlleware morgan
const morgan = require("morgan")
const mongoose = require("mongoose")
const Blog = require("./moduls/blog")

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
app.use(express.static(`public`))
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.redirect('blogs')
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});



// blogs root
app.get('/blogs', (req, res) => {

  Blog.find().sort({ createdAt: -1 })
    .then((resultValue) => {
      // console.log(resultValue)
      res.render('index', { title: "blogs", blogs: resultValue })
    })
})
app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});

//post data to db
app.post('/blogs', (req, res) => {
  const blog = new Blog(req.body)
  blog.save()
    .then((result) => {
      res.redirect('/blogs')
    })
    .catch((err) => console.log("error => ", err))
})

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
