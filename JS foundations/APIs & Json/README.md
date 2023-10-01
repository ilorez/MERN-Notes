# Understanding APIs and JSON


## Table of Content
- [What is an API](#what-is-an-api) 
- [JSON (JavaScript Object Notation)](#json-(javascript-object-notation)) 
- [API Overview](#api-overview) 
- [Tools to Test APIs](#tools-to-test-apis) 
- [Parse And Stringify](#parse-and-stringify) 
 
## What is an API
API stands for **Application Programming Interface**. It is a set of rules and protocols that allows different software applications to communicate with each other. APIs define the methods and data formats that applications can use to request and exchange information.

In simpler terms, an API acts as a bridge between different software systems, enabling them to interact with each other and share data seamlessly.

## JSON (JavaScript Object Notation)
**JSON (JavaScript Object Notation)** is a lightweight data-interchange format. It is easy for humans to read and write and easy for machines to parse and generate. JSON is a common format used for transmitting data between a server and a client, serving as an alternative to XML.

JSON data is represented as key-value pairs, similar to objects in many programming languages.

Example JSON:
```json
{
  "name": "John Doe",
  "age": 30,
  "email": "john@example.com"
}
```
## API Overview
APIs expose a set of endpoints that can be accessed to perform specific actions or retrieve data. These endpoints are typically URLs where the API is hosted, followed by a specific route or path that directs the API to the desired functionality.

For example, a weather API might have an endpoint like: `https://api.weather.com/forecast` to get weather forecasts.

## Tools to Test APIs
Testing APIs can be done using various tools. Some popular tools include:

Postman: A popular API testing tool that allows you to send requests to your API and analyze the response.
cURL: A command-line tool for making HTTP requests and receiving responses.
Insomnia: A powerful open-source tool for testing APIs with a user-friendly interface.
Preview GitHub API
GitHub provides a public API that developers can use to access various features and data from GitHub. You can use the GitHub API to programmatically interact with repositories, issues, pull requests, and more.

To preview the GitHub API and explore its capabilities, refer to the [GitHub API documentation](https://developer.github.com/v3/).


## Parse And Stringify

- JSON.parse => Convert Text Data To JS Object

```js
// Get From Server
const myJsonObjectFromServer = '{"name":"Ilorez"}';
// Convert To JS Object
const myJsObject = JSON.parse(myJsonObjectFromServer);
console.log(typeof myJsObject); // Object
console.log(myJsObject);// {name:"Ilorez"}
// Update Data
myJsObject["name"] = "zobair";
```
- JSON.stringify => Convert JS Object To JSON

```js
// Send To Server
const myJsonObjectToServer = JSON.stringify(myJsObject);
console.log(typeof myJsonObjectToServer); // string
console.log(myJsonObjectToServer); // {"name":"zobair"}
```

Happy Coding!
