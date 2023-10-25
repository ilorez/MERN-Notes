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

### Delete

=> every blog have his own delete button
```html
<button class="delete" data-doc="<%= blog._id %>">Delete</button>
```
- this button in our blog details page that should remove this blog on click on it 


=> a script function that will work on Browser
```js
const deleteBtn = document.querySelector(".delete")
deleteBtn.addEventListener('click', (e) => {
    const id = e.target.dataset.doc
    const deleteRequestPath = '/blogs/' + id
    fetch(deleteRequestPath, {
        method: "DELETE"
    })
        .then((result) => result.json())
        .then((result) => window.location = result.redirect)
        .catch((err) => console.log(err))
})
```
- we create here a script in our page that will send a request to the server when click on the button delete, we using fetch to do that and after that shold return a json obj that we will convert it using `result.json()` to obj JS and inside it we found a path that we get it from server and we will just redirect user to it after deleting blog done using `window.location`. 

=> get the delete request on URL /blogs/:id
```js
app.delete("/blogs/:id", (req, res) => {
  const id = req.params.id
  Blog.findByIdAndDelete(id)
    .then((result) => res.json({ redirect: "/blogs" }))
    .catch((err) => console.log(err))
})
```
- we create here a delete request on path `/blogs/:id` that will get id from URL using `req.params.id` and after that using `mongoose` function `findByIdAndDelete` on blog Schema that will search for a blog in DB blogs with ID  and delte it, after delete has success we send a response that is a json obj contain a redirect key and URL value.

## Express Router

here we will create a router for urls that start with `/blogs`.

let going one by one:

- first lets create a routes > blogRoute.js file and move to it all URLs request start with `/blogs` that founded inside our app
- after that we need to import in the top, the express route module

```js
const express = require('express');
const router = express.Router();
```

- inside express we have the `Router()` method that we will use to create router
- so in plase of using `app.get` or `app.post` ... we will use `router.get`,`router.post` ... 
- Emmm ... what we did just now, we created here a Router module that we can export it and using it in our app

=> in blogRouter.js
```js
module.exports = router;
```
=> in app.js
```js
const blogRouter = require("./routes/blogRoute")
.
.
.
// blog routes
app.use('/blogs', blogRouter)
```
- so that's working greate and we done but i want to add a note
- if we add `/blogs` in our blog routes middlware that mean it's will look for just urls that start with `/blogs`. and it's will add in first of every url inside our blogRouter the `/blogs` so we don't need to write it in each url request 

## MVC Basics

- Stands for Model, view , Controller
- MVC is way of structuring our code & files
- Keeps code more modular, reusable & easier to read

### Model & view
- **Model** : we use model in our app before for intract with Database like when we use Blog model
- **View** : same thing with view we use ejs to create dynamique template view that user will see.

### Controllers
---
  
  [Model] ------- [Controller] ------- [View]

---
the controller is the thing that make contact line between the model and view

the idea of controller is to split the function that we use inside our requests and reference it tp the module to make it reusable and easier to read and edit

=> so the story is:
- create a folder controllers in the same place that the moduls and views in it (MVC)
- this folder will contain our app parts controller, what that's mean ?
- every page has one or many part ,for our page have a blog part that contain (create,delete,get,post...) blog 
- so because it's have many function the controller say leave me make your app more orderd, 
- so you need to create a folder for our example blogController.js and put inside it every blog function
- after that import it from your blogRoute and call the functions in there place
- that all, it's doesn't change any thing in your page every thing work same but you can't imagine how that help many sides

**Note**: ofcours you can look inside `controllers > blogController.js` for more understanding, after that look to file `routes > blogRoute.js` to see how we creat reference for our functions.

## structur Views

- we have in our page a blog that can create it delete it ... and for every option of thoose we need to create view for it so for creating a blog there is create.ejs view.

- imagin now if we have a another resource like user that we can create user delete user ... just like blog so we want to create a create.ejs view and that will make a probleme in our views so we need name it createUser.ejs, but we have another way

- create folder blog that contain blog views & user contain user views



