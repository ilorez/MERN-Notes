# Middleware

Middleware in Express.js is code that runs between receiving a request and sending a response. The `app.use(fun)` method is used to implement middleware.


## Table of Content
- [Middleware Examples](#middleware-examples) 
- [Using `next()`](#using-`next()`) 
- [Third-Party Middleware (`morgan`, `helmet`, ...)](#third-party-middleware-(`morgan`-`helmet`-)) 
  - [Installation](#installation) 
- [Serving Static Files (CSS, Images, SVGs, ...)](#serving-static-files-(css-images-svgs-)) 
 
## Middleware Examples

- **Logger Middleware**: Logs details of every request.
- **Authentication Check Middleware**: Protects routes by validating authentication.
- **JSON Parsing Middleware**: Parses JSON data from requests.
- **404 Page Middleware**: Returns a 404 page for undefined routes.

## Using `next()`

The `next()` function is used to move to the next middleware in the stack.

## Third-Party Middleware (`morgan`, `helmet`, ...)

Third-party middleware packages are pre-built middleware that simplify development by providing ready-made functionalities.

### Installation

To install `morgan`, use the following command:

```bash
npm install morgan
```

## Serving Static Files (CSS, Images, SVGs, ...)

To serve static files and allow browser access, create a folder for static content (e.g., "public") and make it public using the following code:

```js
app.use(express.static("public")); // "public" is the folder name in our project
```
