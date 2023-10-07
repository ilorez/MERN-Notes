# Promise
  To Understand Ajax, Fetch, Promises


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

### getUnderstand()

