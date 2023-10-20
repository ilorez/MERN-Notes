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


