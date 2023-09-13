
// acces to a value
let people = ['ahmed', 'adil', ['youssef', 'kamal']];

let [, , [, d]] = people;
console.log(d);

// swap variables
let a = "1";
let c = "2";


[a, c] = [c, a];
console.log("a:" + a, " b:" + c);


