## EJS (Embedded JavaScript)

### Content

- [What is EJS](#what-is-ejs)
- [EJS view engine](#ejs-view-engine)
- [Passing data into views](#passing-data-into-views)
- [Partials](#partials)

### What is EJS:

EJS (Embedded JavaScript) is a popular templating engine for JavaScript that allows you to generate HTML markup with dynamic content on the server side. It can be used with Node.js and other JavaScript server-side environments.

EJS templates contain embedded JavaScript code within HTML markup. This allows you to insert dynamic data into your HTML views and create reusable templates for rendering web pages.

### EJS View Engine:

To use EJS as a view engine in a Node.js application, you need to follow these steps:

Install EJS: First, you need to install EJS as a dependency in your Node.js project. You can do this using npm or yarn:

```shell
npm install ejs
# or
yarn add ejs
```

Set Up EJS in Your Express App: If you are using Express.js, you can set EJS as your view engine. Here's an example of how to configure EJS in an Express application:

```javascript
const express = require('express');
const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Set the views directory (optional)
app.set('views', path.join(\_\_dirname, 'views'));

// Now, you can render EJS templates in your routes
app.get('/', (req, res) => {
res.render('index', { title: 'Welcome to My App' });
});

// Start your Express app
app.listen(3000, () => {
console.log('Server is running on port 3000');
});
```

Create EJS Templates: Create EJS templates in a directory specified by the views setting in your Express app. For example, you can create an index.ejs file:

```html
<!DOCTYPE html>
<html>
  <head>
    <title><%= title %></title>
  </head>
  <body>
    <h1><%= title %></h1>
    <p>Welcome to my website!</p>
  </body>
</html>
```

Render EJS Templates: Use res.render in your Express routes to render EJS templates and pass data to them as an object. In the example above, we passed the title variable to the index.ejs template.

### Passing Data into Views:

To pass data into your EJS views, you can simply include variables within <%= %> tags in your EJS template, as shown in the example above. The data is passed as an object to the res.render function in your route handler.

For example, in `res.render('index', { title: 'Welcome to My App' });`, we passed the title variable to the index.ejs template, and it can be accessed as `<%= title %>` in the template to display the dynamic content.

### Partials

we use partials for `DRY` (don't repeat yourself).
in this projet we create a file 'parials' and we put on it three ejs files (head ,nav and footer),
because this parts we repeat it multi times in our pages.
after create partials we can include any one of them by using `include() method`.

```ejs
<%- include('path/to/file.ejs') %>
```

Happy coding!
