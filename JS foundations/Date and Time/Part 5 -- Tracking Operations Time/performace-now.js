/*
performance.now():

The performance.now() method returns a high-resolution time stamp, measured in milliseconds, indicating the current time from the navigation start to the current moment. It is useful for accurately measuring the elapsed time during performance testing or profiling code execution.

Example usage:
*/


const startTime = performance.now();

// Code to be measured for performance

const endTime = performance.now();
const elapsedTime = endTime - startTime;
console.log(`Elapsed time: ${elapsedTime} milliseconds`);
