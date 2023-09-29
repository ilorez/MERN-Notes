# Modules Import And Export

    Hello in this repo part you will learn how to use Import & Expot!

## Import And Export

```javascript
// file1.js
let a = 10;
let arr = [1, 2, 3, 4];

function saySomething() {
  return `Something`;
}

export { a, arr, saySomething };
```

```javascript
import { a, arr, saySomething as s } from "./main.js";

console.log(a); // 10
console.log(arr); // [1, 2, 3, 4]
console.log(s()); // Something
```
