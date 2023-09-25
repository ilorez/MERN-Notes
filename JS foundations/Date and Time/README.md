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

    - getTime() => Number Of Milliseconds

    - getDate() => Day Of The Month

    - getFullYear() => (2023)

    - getMonth() => Zero Based

    - getDay() => Day Of The Week

    - getHours()

    - getMinutes()

    - getSeconds()
