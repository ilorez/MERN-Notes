// Synchronous

console.log("1");
console.log("2");
window.alert("Operation");
console.log("3");

// Asynchronous
console.log("1");
console.log("2");
setTimeout(() => console.log("Operation"), 3000);
console.log("3");