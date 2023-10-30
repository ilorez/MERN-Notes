# Date and Time


## Table of Content
- [Contents](#contents) 
- [Part 1 - Introduction](#part-1---introduction) 
- [Part 2 - Get Date Methods](#part-2---get-date-methods) 
    - [get date using date methods](#get-date-using-date-methods) 
- [Part 3 - Set Date Methods](#part-3---set-date-methods) 
    - [set time using date methods](#set-time-using-date-methods) 
    - [Note: If you find that hours it's not 0 that because your time zone(+/-) (1-12) hour according to space between you and Greenwich Mean Time (GMT)](#note-if-you-find-that-hours-it's-not-0-that-because-your-time-zone(-)-(1-12)-hour-according-to-space-between-you-and-greenwich-mean-time-(gmt)) 
- [Part 4 - Fromatting Date](#part-4---fromatting-date) 
- [Part 5 - Tracking Operations Time](#part-5---tracking-operations-time) 
    - [Note: take look inside Part 5 file](#note-take-look-inside-part-5-file) 
 
## Contents

- [Part 1 - Introduction](#part-1---introduction)
- [Part 2 - Get Date And Time Methods](#part-2---get-date-methods)
- [Part 3 - Set Date And Time Methods](#part-3---set-date-methods)
- [Part 4 - Formatting Date](#part-4---fromatting-date)
- [Part 5 - Tracking Operations Time](#part-5---tracking-operations-time)

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

## Part 2 - Get Date Methods

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

## Part 3 - Set Date Methods

#### set time using date methods

- setTime(Milliseconds)
- setDate() => Day Of The Month [Negative And Positive]
- setFullYear(year, month => Optional [0-11], day => Optional [1-31])
- setMonth(Month [0-11], Day => Optional [1-31]) [Negative And Positive]
- setHours(Hours [0-23], Minutes => Optional [0-59], Seconds => Optional [0-59], MS => Optional [0-999])
- setMinutes(Minutes [0-59], Seconds => Optional [0-59], MS => Optional [0-999])
- setSeconds(Seconds => [0-59], MS => Optional [0-999])

--> `setTime()` take time with milliseconds and covert it to full day from 1970.

```js
const time = new date();
time.setTime(10000); // time => 1970-01-01T00:00:10.000Z
```

#### Note: If you find that hours it's not 0 that because your time zone(+/-) (1-12) hour according to space between you and Greenwich Mean Time (GMT)

--> `setDate()` take day number between 1-(28/30/31)

```js
time.getDate(30); // time => 1970-01-30T00:00:10.000Z
```

=? negative and positive: what will happen if use (number > or < month days)

```js
time.getDate(35); // time => 1970-02-04T00:00:10.000Z
```

```js
time.getDate(-2); // time => 1969-12-29T00:00:10.000Z
```

--> for other methods `setFullYear()`, `setMonth()`... and others it's accept same roles.

## Part 4 - Fromatting Date

new Date(timestamp)
new Date(Date String)
new Date(Numeric Values)

Format

- "Oct 25 1982"
- "10/25/1982"
- "1982-10-25" => ISO International Standard
- "1982 10"
- "1982"
- "82"
- 1982, 9, 25, 2, 10, 0
- 1982, 9, 25
- "1982-10-25T06:10:00Z"

```js
Date.parse("String"); // Read Date From A String
```

```js
console.log(Date.parse("Aug 25 2003")); // 1061769600000
let date2 = new Date(1061769600000); // => date2 = 2003-08-25T00:00:00.000Z
let date3 = new Date("10-25-1982"); // => date3 = 1982-10-25T00:00:00.000Z
```

--> in `Prat 4` file you can find how to use every type of date fromat

## Part 5 - Tracking Operations Time

- Track Operations Time

```js
// Start Time
let start = new Date();

// Operation
for (let i = 0; i < 1000; i++) {
  //    document.write(`<div>${i}</div>`);
  //    let div = document.createElement("div");
  //    div.appendChild(document.createTextNode(i));
  //    document.body.appendChild(div);
  console.log("Hellow world! ".repeat(100));
}

// Time End
let end = new Date();

// Operation Duration
let duration = end - start;

console.log(duration);
```

=> there is arleady a function build doing what arleady do:

- performance.now()
- performance.mark()

`performance.now() and performance.mark() are both methods provided by the Performance interface in JavaScript, specifically in the browser's Web APIs. They are used to measure and analyze the performance of code and other operations in a web application.

#### Note: take look inside Part 5 file

Happy Coding!
