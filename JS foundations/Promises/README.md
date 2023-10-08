# Promise


## Callback Hell
  Pyramid Of Doom || Callback Hell

### What Is Callback
- A Function That Is Passed Into Another One As An Argument To Be Executed Later
### Callback Hell Example
  - Function To Handle Photos
    - [1] Download Photo From URL
    - [2] Resize Photo
    - [3] Add Logo To The Photo
    - [4] Show The Photo In Website

### How to fix this probleme
  - that why promise for.


## Promise Intro And Syntax

### What is Promise

  - Promise In JavaScript Is Like Promise In Real Life
  - Promise Is Something That Will Happen In The Future
  - Promise Avoid Callback Hell
  - Promise Is The Object That Represent The Status Of An Asynchronous Operation And Its Resulting Value

### Promise Status
  --- Pending: Initial State
  --- Fulfilled: Completed Successfully
  --- Rejected: Failed

### Story (promise way story)
  - Once A Promise Has Been Called, It Will Start In A Pending State
  - The Created Promise Will Eventually End In A Resolved State Or In A Rejected State
  - Calling The Callback Functions (Passed To Then And Catch) Upon Finishing.

  - Then
  --- Takes 2 Optional Arguments [Callback For Success Or Failure]


```js
const myPromise = new Promise((resolveFunction, rejectFunction) => {
  let connect = false;
  if (connect) {
    resolveFunction("Connection Established");
  } else {
    rejectFunction(Error("Connection Failed"));
  }
}).then(
  (resolveValue) => console.log(`Good ${resolveValue}`),
  (rejectValue) => console.log(`Bad ${rejectValue}`)
);
```
## Part 3 - Promise – Then, Catch & Finally

  Then    => Promise Is Successfull Use The Resolved Data
  Catch   => Promise Is Failed, Catch The Error
  Finally => Promise Successfull Or Failed Finally Do Something


### story
We Will Go To The Meeting, Promise Me That We Will Find The 4 Employees
  .then(We Will Choose Two People)
  .then(We Will Test Them Then Get One Of Them)
  .catch(No One Came)



### story => code

```js
const myPromise = new Promise((resolveFunction, rejectFunction) => {
    let employees = ["ilorez","najdaoui","zobair","ahmed"];
    if (employees.length === 4) {
        resolveFunction(employees);
    } else {
        rejectFunction(Error("Number Of Employees Is Not 4"));
    }
});

myPromise
    .then((resolveValue) => {
        resolveValue.length = 2;
        return resolveValue;
    })
    .then((resolveValue) => {
        resolveValue.length = 1;
        return resolveValue;
    })
    .then((resolveValue) => {
        console.log(`The Choosen Emplyee Is ${resolveValue}`);
    })
    .catch((rejectedReason) => console.log(rejectedReason))
    .finally(console.log("The Operation Is Done"));
```

## Part 4 - Promise And XmlHttpRequest
in this part we fied a big probleme in get data from api and woriking with it, if you try to getData from an api without using promise u will find alot of problems first u need to use async and the promise use it automatiquely and second thing the flexbiliy when working and editing data and it's just amazing and DRY.

```js
const getData = (apiLink) => {
    return new Promise((resolve, reject) => {
        let myRequest = new XMLHttpRequest();
        console.log(myRequest)
        myRequest.onload = function () {
            if (this.readyState === 4 && this.status === 200) {
                resolve(JSON.parse(this.responseText));
            } else {
                reject(Error("No Data Found"));
            }
        };

        myRequest.open("GET", apiLink);
        myRequest.send();
    });
};

getData("https://api.github.com/users/ilorez/repos")
    .then((result) => {
        result.length = 10;
        return result;
    })
    .then((result) => console.log(result[0].name))
    .catch((rej) => console.log(rej));
```

**Note**: look to Part 4 script file to full understanding

## Fetch API
**The Fetch API** provides an interface for fetching resources (including across the network). It is a more powerful and flexible replacement for **XMLHttpRequest**.
```js
fetch("https://api.github.com/users/ilorez/repos")
  .then((result) => {
    console.log(result);
    let myData = result.json();
    console.log(myData);
    return myData;
  })
  .then((full) => {
    full.length = 10;
    return full;
  })
  .then((ten) => {
    console.log(ten[0].name);
  });
```
### Concepts and usage
The Fetch API uses Request and Response objects (and other things involved with network requests), as well as related concepts such as CORS and the HTTP Origin header semantics.

For making a request and fetching a resource, use the fetch() method. It is a global method in both Window and Worker contexts. This makes it available in pretty much any context you might want to fetch resources in.

The fetch() method takes one mandatory argument, the path to the resource you want to fetch. It returns a Promise that resolves to the Response to that request — as soon as the server responds with headers — even if the server response is an HTTP error status. You can also optionally pass in an init options object as the second argument (see Request).

Once a Response is retrieved, there are a number of methods available to define what the body content is and how it should be handled.

You can create a request and response directly using the Request() and Response() constructors, but it's uncommon to do this directly. Instead, these are more likely to be created as results of other API actions (for example, FetchEvent.respondWith() from service workers).

Find out more about using the Fetch API features in Using Fetch, and study concepts in Fetch basic concepts.

[Read More About Fetch API (MDN Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)


## Part 6 -- Promise – All, All Settled, Race
there is here three promises with defrenet timeout or done duration for use `All`,`All Settled` & `Race` methods on it.
```js
const myFirstPromise = new Promise((res, rej) => {
    setTimeout(() => {
        res("Iam The First Promise");
    }, 5000);
});

const mySecondPromise = new Promise((res, rej) => {
    setTimeout(() => {
        rej("Iam The Second Promise");
    }, 1000);
});

const myThirdPromise = new Promise((res, rej) => {
    setTimeout(() => {
        res("Iam The Third Promise");
    }, 2000);
});
```
### All
Creates a Promise that is resolved with an array of results when all of the provided Promises resolve, or rejected when any Promise is rejected.

=> return an array of promises result if all promises has done with success (fulfilled) or return the first rejected if one of the promises array has rejected
```js
Promise.all([myFirstPromise, mySecondPromise, myThirdPromise]).then(
  (resolvedValues) => console.log(resolvedValues),
  (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
```
### All Settked
Creates a Promise that is resolved with an array of results when all of the provided Promises resolve or reject.

=> return array of the promises result if was fulfilled or rejected
```js
Promise.allSettled([myFirstPromise, mySecondPromise, myThirdPromise]).then(
  (resolvedValues) => console.log(resolvedValues),
  (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
);
```
### Race
Creates a Promise that is resolved or rejected when any of the provided Promises are resolved or rejected.

it's like a race first one done will return as the result, if it was Fulfilled or rejected.
```js
Promise.race([myFirstPromise, mySecondPromise, myThirdPromise]).then(
    (resolvedValues) => console.log(resolvedValues),
    (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
);
```

## Part 7 -- Async And Training
  - Async Before Function Mean This Function Return A Promise
  - Async And Await Help In Creating Asynchronous Promise Behavior With Cleaner Style


```
  async function getData() {
    let users = [];
    if (users.length > 0) {
        return "Users Found";
    } else {
        throw new Error("No Users Found");
    }
}

console.log(getData());

getData().then(
    (resolvedValue) => console.log(resolvedValue),
    (rejectedValue) => console.log("Rejected " + rejectedValue)
);
```

**Notes**:
  - In JS, 'async' is a keyword used to define an asynchronous function returns a Promise, allowing for better handing of asynchrounous operations.
  - when you mark a function as 'async', it means tht the function will always return a Promise. The Promise will either be resolved with the value the function produces or rejected with an error it encounters.
  - By using 'async' and 'await' in combination, you can write asynchronous code in a more synchronous-looking manner, making it easier to work with promises and handle asynchronous operations without dealing with callback functions or using "then" chains extensively.

