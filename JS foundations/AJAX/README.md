# AJAX


## Table of Content
- [Introduction](#introduction) 
- [Part 1 - Request And Response From Real API](#part-1---request-and-response-from-real-api) 
- [Part 2 - Loop On Data](#part-2---loop-on-data) 
 
## Introduction
![aja logo](https://www.w3schools.com/whatis/img_ajax.jpg)

  - AJAX => `A`synchronous `J`avaScript `A`nd `X`ML
  - Approach To Use Many Technologies Together [HTML, CSS, Js, DOM]
  - It Use "XMLHttpRequest" Object To Interact With The Server
  - You Can Fetch Data Or Send Data Without Page Refresh
  - Examples
  --- Youtube Studio
  --- Google Drive
  --- Upload Article Photo
  --- Form Check Name
### What is AJAX?

- AJAX is not a programming language.

- AJAX just uses a combination of:

    - A browser built-in XMLHttpRequest object (to request data from a web server)
    - JavaScript and HTML DOM (to display or use the data)

### Test new XMLHttpRequest();
```js
let req = new XMLHttpRequest();
console.log(req);
```  
- we created a new Obj and we log it for see the methods that we can use to work with it

### Status Code
- code that return after a task ,give you info about the status of this task is complete correctly or there is an error.

for Example:
loading page if this page not exists it's this status code will be 404 Not Found

| Status Code | Description                        |
|-------------|------------------------------------|
| 200         | OK - The request was successful   |
| 201         | Created - Resource created         |
| 204         | No Content - Request successful, but no response body |
| 400         | Bad Request - Request cannot be fulfilled due to bad syntax or invalid request message framing |
| 401         | Unauthorized - Authentication failed or user lacks proper authentication credentials |
| 403         | Forbidden - The server understood the request, but the server refuses to authorize it |
| 404         | Not Found - Requested resource could not be found |
| 500         | Internal Server Error - Server encountered an unexpected condition and could not fulfill the request |
| 502         | Bad Gateway - Server acting as a gateway or proxy received an invalid response from an upstream server |
| 503         | Service Unavailable - Server is not ready to handle the request |
| 504         | Gateway Timeout - Server acting as a gateway or proxy did not receive a timely response from an upstream server |

## Part 1 - Request And Response From Real API
### Request And Response Working Steps
!["working desinge"](https://www.w3schools.com/whatis/img_ajax.gif)
1. An event occurs in a web page (the page is loaded, a button is clicked)
2. An XMLHttpRequest object is created by JavaScript
3. The XMLHttpRequest object sends a request to a web server
4. The server processes the request
5. The server sends a response back to the web page
6. The response is read by JavaScript
7. Proper action (like page update) is performed by JavaScript

### Ready State => Status Of The Request
  [0] Request Not Initialized.

  [1] Server Connection Established.

  [2] Request Received.

  [3] Processing Request.

  [4] Request Is Finished And Response Is Ready.

  - Status.

  [200] Response Is Successful.

  [404] Not Found

## Part 2 - Loop On Data\
for get some notes about looping on Data and take a look to how AJAX Working with DOM, look to script inside Part 2
### Search
  - Cross Origin API [CORS]
  - API Authentication

