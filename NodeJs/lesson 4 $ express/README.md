# Express.js - A Minimal README

## What is Express.js?

Express.js, often referred to as just "Express," is a fast, unopinionated, and minimalist web framework for Node.js. It is designed for building web applications and APIs. Express provides a set of simple and robust features for web and mobile applications, making it one of the most popular choices for web development with Node.js.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js: You can download it from [nodejs.org](https://nodejs.org/).

### Installation

```bash
npm install express
```

## Hello, World!

Now, let's create a simple "Hello, World!" example with Express.js.

1. Create a file named app.js in your project directory.

```js
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
```

2. Start your Express.js application:

```bash
node app.js
```

Open your web browser and visit `http://localhost:3000`. You should see "Hello, World!" displayed in your browser.

## Basic Concepts

### Routing

Routing in Express.js is the process of defining how your application responds to client requests. You specify routes that map to specific URLs and HTTP methods. For example:

```javascript
app.get("/", (req, res) => {
  // Handle GET request at the root URL
  res.send("Hello, World!");
});
```

Here, we've defined a route that responds to GET requests at the root URL ('/').

### Middleware

Middleware functions in Express are functions that have access to the request and response objects. They can be used to perform various tasks such as authentication, logging, and data parsing. Middleware can be applied to specific routes or to the entire application. For example:

```js
app.use(express.json()); // Parse JSON requests
```

In this case, we're using middleware to parse JSON requests.

### Templates

Express can be combined with template engines like EJS, Handlebars, or Pug to generate dynamic HTML content. This allows you to create dynamic web pages. For example, you can render an EJS template like this:

```js
app.set("view engine", "ejs"); // Set EJS as the template engine

app.get("/profile", (req, res) => {
  // Render the 'profile' template with data
  res.render("profile", { username: "John" });
});
```

### Further Reading

#### Express.js

- [Official Documentation](https://expressjs.com/)
- [GitHub Repository](https://github.com/expressjs/express)

#### EJS (Embedded JavaScript Templates)

- [Official Documentation](https://ejs.co/)
- [GitHub Repository](https://github.com/mde/ejs)

For more detailed information and resources, please refer to the official documentation and GitHub repositories of Express.js and EJS.

Hapyy coding!
