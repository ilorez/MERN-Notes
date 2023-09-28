/*
performance.mark():

The performance.mark() method allows you to create a timestamp in the browser's performance timeline, which is useful for tracking and analyzing the performance of specific operations or events in your application.

Example usage:
*/
const markName = 'myCustomMark';

// Create a performance mark with a specified name
performance.mark(markName);

for (let i = 0; i < 1000; i++) {
    b = markName
    console.log(markName)
}


// Later, you can retrieve this mark from the timeline
const marks = performance.getEntriesByName(markName);
console.log(marks);