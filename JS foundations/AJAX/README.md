# AJAX




## Table of Content
- [Introduction](#introduction) 
  - [What is AJAX?](#what-is-ajax) 
  - [Test new XMLHttpRequest();](#test-new-xmlhttprequest()) 
  - [Status Code](#status-code) 
- [Part 1 - Request And Response From Real API](#part-1---request-and-response-from-real-api) 
  - [Ready State => Status Of The Request](#ready-state->-status-of-the-request) 
- [Part 2 - Loop On Data\](#part-2---loop-on-data\) 
- [require Concepts](#require-concepts) 
  - [Cross Origin API [CORS]](#cross-origin-api-[cors]) 
  - [API Authentication](#api-authentication) 
 
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
## require Concepts

### Cross Origin API [CORS]
Cross-Origin Resource Sharing (CORS) is a security feature implemented by web browsers that allows or restricts web applications running at one origin (domain) to make requests for resources from a different origin (domain). An "origin" in this context is defined by the combination of the protocol (e.g., HTTP, HTTPS), domain, and port.

When a web application attempts to make a cross-origin HTTP request (e.g., an XMLHttpRequest, Fetch API, or Ajax request), the browser sends an HTTP request to the target server to determine if the request is allowed based on CORS policies.

CORS policies are defined by the server and conveyed through HTTP headers. The server can specify which origins are allowed to make requests, what types of requests are permitted (e.g., GET, POST, PUT), and what headers and methods are allowed in the request.

Here are some key components of CORS:

1. **Origin**: The combination of protocol, domain, and port from which the request originates.

2. **CORS Request**: An HTTP request issued by a client to a different origin.

3. **CORS Headers**: Additional HTTP headers sent by the server to specify the CORS policies.

   - `Access-Control-Allow-Origin`: Specifies which origins are allowed to access the server's resources. It can be a specific origin or a wildcard ("*") to allow any origin.
   - `Access-Control-Allow-Methods`: Specifies the HTTP methods (e.g., GET, POST, PUT) allowed for cross-origin requests.
   - `Access-Control-Allow-Headers`: Specifies the allowed headers for cross-origin requests.
   - `Access-Control-Allow-Credentials`: Indicates whether credentials (e.g., cookies, HTTP authentication) are allowed for the cross-origin request.
   - `Access-Control-Max-Age`: Specifies how long the results of a preflight request (a special request to determine if the actual request is safe to send) can be cached.

4. **Preflight Request**: An initial request made by the browser using the HTTP OPTIONS method to determine if the actual request is safe to send.

CORS helps protect against Cross-Site Request Forgery (CSRF) attacks by allowing servers to specify which origins can access their resources, thus preventing malicious websites from making unauthorized requests on behalf of users.
### API Authentication

API authentication is a crucial aspect of securing web APIs (Application Programming Interfaces) to ensure that only authorized users or systems can access the API and its resources. There are several methods of API authentication, and the choice of method depends on the specific requirements and security considerations of your application. Here are some basic methods of API authentication:

1. **API Keys**:
   - An API key is a unique string issued to a developer or application, acting as a credential to access an API.
   - The API key is included in the request headers or query parameters when making API calls.
   - API keys are simple to implement and suitable for public APIs or when authentication granularity is not a significant concern.

2. **Basic Authentication**:
   - Basic Authentication involves sending a username and password with each API request.
   - The credentials are Base64 encoded and included in the request headers.
   - This method is straightforward to implement but less secure compared to other authentication methods since credentials are sent with each request.

3. **OAuth 2.0**:
   - OAuth 2.0 is a widely used protocol for authorization and authentication.
   - It provides a more secure and flexible way to grant limited access to an API on behalf of a user or application.
   - OAuth 2.0 involves obtaining an access token (which acts as a credential) after authentication, and this token is then used to make API requests.
   - Common OAuth 2.0 grant types include Authorization Code Grant, Implicit Grant, Client Credentials Grant, and Resource Owner Password Credentials Grant.

4. **JWT (JSON Web Tokens)**:
   - JWT is a compact, URL-safe token format used for securely transmitting information between parties.
   - It can be used to authenticate a user and provide additional claims, such as roles and permissions.
   - The server signs the JWT with a secret key, allowing it to verify the token's authenticity when received from the client.

5. **Bearer Token**:
   - Bearer token authentication involves sending a token (e.g., JWT) in the Authorization header of the API request.
   - The word "Bearer" is added before the token in the header to indicate the type of authentication being used.
   - The server validates the token to authenticate the request.

6. **API Authentication with Cookies**:
   - Similar to how traditional web applications use cookies for authentication, APIs can also use cookies.
   - The API server sets a cookie upon successful authentication, and subsequent API requests include the cookie for authentication.
   - This method is suitable for applications where the client and server share the same domain.

It's essential to choose an appropriate authentication method based on your application's security requirements, usage context, and infrastructure. Additionally, always follow best practices for securing credentials, such as using HTTPS, rotating keys periodically, and restricting API access based on roles and permissions.

