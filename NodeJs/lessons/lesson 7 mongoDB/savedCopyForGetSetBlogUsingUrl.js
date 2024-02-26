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
app.use(morgan('dev'))

app.get('/add-blog', (req, res) => {
  const blog = new Blog({
    title: "blog title 2",
    snippet: "blog snippet",
    body: "blog body"
  })
  blog.save()
    .then((request) => {
      res.send(request)
    }).catch((err) => console.log(err))
})

app.get('/all-blogs', (req, res) => {
  Blog.find()
    .then((result) => {
      res.send(result)
    }).catch((err) => console.log(err))
})
app.get('/single-blog', (req, res) => {
  Blog.findById("6523325b70ff8ed9930d6a1f")
    .then((result) => {
      res.send(result)
    })
    .catch((err) => console.log(err))
})
app.get('/', (req, res) => {
  const blogs = [
    { title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur' },
    { title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur' },
    { title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur' },
  ];
  res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
