## MongoDb

after create your databse and tables in mongoDB copy the database conecte link that look like this

- 'mongodb+srv://<user>:<password>@<database>.gm9xflf.mongodb.net/<file>?retryWrites=true&w=majority'

we can use this link to connect to our DB and read write update or delete the the data from it.
## connect to db
```js
// acces to database mongodb
const dbc = 'mongodb+srv://zozo:159159@ilorez.gm9xflf.mongodb.net/learn?retryWrites=true&w=majority'
mongoose.connect(dbc)
  .then((res) => app.listen(3000))
  .catch((err) => console.log(err))
```

so what we did here:

- first we connected to database using mongoose
- after the connecting has done we told app to list to port 3000 
- if you find a error in connection log on the console

## create Shema 
```js
const mongoose = require("mongoose")
const Schema = mongoose.Schema
const blogSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    snippet: {
        type: String,
        require: true
    },
    body: {
        type: String,
        require: true
    }

}, { timestamps: true });

const Blog = mongoose.model("Blog", blogSchema)

module.exports = Blog;
```
### step one
- What is Schema and for what:
    - schema is the thing that will definde the structer of the document that we will stor it inside the collections
    - so if you look to again you will find that we use `new Schema` beacause it's actualy a constractor
    - after that we set our properties with his type and reuirement
    - we set another argument it's opetion one that add the timestps to our document (created date, updated date ...)
    - after that we need to understand next step:

### step two
```js
const Blog = mongoose.model("Blog", blogSchema)
```
- what this line say:
    - first with create Blog constant with capital letter to stor the model on
    - `model`: we created model that base on blogSchema that will create a interface for communicate with database collectoion for that type, (find,delete,update... in this db collection)
    - first param was the singelar collection name so in database the name of collection in database is `blogs` => `Blog` and it's really important to write it like that.
    - second param was the schema that the model will based on  

- after this two steps we need just to export module for use it in other files

## Connection with DB
```js
const Blog = require("./moduls/blog")
```
### Create new Blog
we can send data to databse useing:

```js
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
```
- we create here blog with schema that we created and after run blog.save() mongoose do all work from get data and send it to right collection in databse
- after that we send the request to ourpage (request = blog obj that we created)

### Find blogs
```js
app.get('/all-blogs', (req, res) => {
  Blog.find().sort({ createdAt: -1 })
    .then((result) => {
      res.send(result)
    }).catch((err) => console.log(err))
})
```
`Blog.find()`:return all blogs that in blogs collection in databse inside and array.

`sort({ createdAt: -1 })`: for make the last blogs added go to top

*mongoose it's great*

### Get one single blog by Id

```js
app.get('/single-blog', (req, res) => {
  Blog.findById("blog_Id")  // blog_Id =  each blog have unique one
    .then((result) => {
      res.send(result)
    })
    .catch((err) => console.log(err))
})
```
## mongoose Request types

- **GET**: request to get a resource
- **POST**: request to create new data (e.g. a new blog)
- **DELETE**: request to delete data (e.g. delete a blog)
- **PUT**: request to update data (e.g. update a blog)

### GET
we use it a lot in last parts

### POST
let's create a form and send fields values after submit using post request

```html
<form action="/blogs" method="post">
  <label for="title">Blog title:</label>
  <input type="text" id="title" name="title" required>
  <label for="snippet">Blog snippet:</label>
  <input type="text" id="snippet" name="snippet" required>
  <label for="body">Blog body:</label>
  <textarea id="body" name="body" required></textarea>
  <button>Submit</button>
</form>
```
```js
app.post('/blogs', (req, res) => {
  const blog = new Blog(req.body)
  blog.save()
    .then((result) => {
      res.redirect('/blogs')
    })
    .catch((err) => console.log(err))
})
```
so after sumbmit it's will send req obj that contain every details about our request. We can get our data from request using `req.body` and that will return a obj on template `{key:value,...}` 

- **key** = field(input) name
- **value** = field value

```js
  const blog = new Blog(req.body)
```
maybe this line confused some how.

- **schema template** : { title: String, snippet: String, body: String }
- **request body** : { title: 'value', snippet: 'value', body: 'value' }

so becouse it's same key or names we don't need to give to each key one by one the value.

after greate our schema obj we need just to save it to our DB like we learned befour and the moongose will do other work

### Route Parameters

```js
app.get('/blogs/:id', (req, res) => {
  const id = req.params.id // id = any thing after /blogs/
  Blog.findById(id)
    .then((result) =>
      res.render('blog', { title: 'MyBlog', blog: result })
    )
    .catch((err) => console.log(err))
})
```
so what we do here is just getting id from url path using req obj and after that using mongoose to find this blog with the id that we get after that we rendre it in another page that we created inside views


