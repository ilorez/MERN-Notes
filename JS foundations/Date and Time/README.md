# Date and Time

## Part 1 - Introduction

- Date Constructor

```js
let dateNow = new Date();

console.log(dateNow); // output: Sun Sep 24 2023 01:24:30 GMT+0100 (GMT+01:00)
```

Static Methods

- Date.now()

- To Track Time You Need Starting Point

- Epoch Time Or Unix Time In Computer Science Is The Number of Seconds Since January 1, 1970.

- Why 1970 [829 Days To 136 Years]

```js
const today = Date.now();
console.log(today); // = 1970-01-01- 00:00 ====> today with MILLs Seconds
```

for get the days we can use:

```js
console.log(today / 1000 / 60 / 60 / 24); // output : number of days between today and 1970-01-01
```

Search For

- Year 2038 Problem in Computer Science.

## Part 2 - Get Date And Time Methods

#### get date using date methods

    - getTime() => Number Of Milliseconds

    - getDate() => Day Of The Month

    - getFullYear() => (2023)

    - getMonth() => Zero Based

    - getDay() => Day Of The Week

    - getHours()

    - getMinutes()

    - getSeconds()

=> We learned before what is Obj and we know that the date it's also a obj and this methods above it's obj methods, so we need just to use it like just we learned.

```js
const seconds = dateNow.getSeconds(); // output : (number between 0 and 59) according to localtime
```

but actuly what the method getSeconds() do here i didn't look actually to the method but i think it' simple it just convert date from MS to S and use S % 60 that will return seconds like what getSeconds method do
note : the way that getSeconds method use for get seconds it's deferent of cours and and if you want to know complete way you need to have look to [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) or [ECMAScript](https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.prototype.getseconds) specification.

```js
setInterval(() => {
  let day = new Date();
  console.log(day.getSeconds()); // output: 54
  console.log(parseInt(day / 1000) % 60); // output: 54
}, 1000);
```
