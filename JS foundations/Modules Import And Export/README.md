# Modules Import And Export

Hello in this repo part you will learn how to use Import & Expot.
- you can use this concept to make make you app flexible and DRY. How:
  - tasks dividing: you can make for every task (create user, delete user, create a card, update something, fetch data) a file that will just do one simple thing and if you want it you call using import
- there many things that should use in import and export but now in this part we will see just the basics of use.

## Export
- we use export if we have a function or value that we want to share from a file to another.

```javascript
// main.js
let a = 10;
let arr = [1, 2, 3, 4];

function saySomething() {
  return `Something`;
}
```
for export this variable and functions we have two ways.
- first one:
 - add export before variable or fucntion
 ```js
 export let a = 10;
 export function saySomething() {
  return `Something`;
}
 ```
 - add export in the end of file after done with code like that:

```javascript
export { a, arr, saySomething };
```
## Import

we use import to call the function or variable that we export use next syntax afte that we work with it normal like if it in the file.
```javascript
import { a, arr, saySomething as s } from "./main.js";

console.log(a); // 10
console.log(arr); // [1, 2, 3, 4]
console.log(s()); // Something
```
##  Named vs Default Export And Import All

  - Export Alias
for change the name of function in export or import we use `As` after his name
```js
export {myfunction as myf} 
import {myfunction as myf} from 'path/to/file.js'
```
  - Default Export
what we see befor it's normal export but we have another type that we call default export:
  - we can use it one time at file
  - we done need to add `{}` for export it or import it

```js
export default function myApp(){
  return "Hello World"
}
// or in the end of file
export default myApp
```
  - Import All
-> we can import every thing as module that we export from file using
```js
import * as all from "./main.js";

console.log(all); // Module {Symbol(Symbol.toStringTag): 'Module'}
console.log(typeof all) // object

console.log(all.myNumber); // 10
console.log(all.arr); // [1,2,3,4]
```

Happy Coding!

