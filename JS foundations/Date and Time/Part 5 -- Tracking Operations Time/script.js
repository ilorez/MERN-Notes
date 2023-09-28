/*
  Date And Time
  - Track Operations Time

  Search
  - performance.now()
  - performance.mark()
*/

// Start Time
let start = new Date();

// Operation
for (let i = 0; i < 1000; i++) {
    console.log("Hellow world! ".repeat(100))
}

// Time End
let end = new Date();

// Operation Duration
let duration = end - start;

console.log(duration);