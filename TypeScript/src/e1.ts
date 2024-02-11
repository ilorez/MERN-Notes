// function calculate(numOne:number, numTwo:number) {
//     return numOne + numTwo;
//   }
  
//   console.log(calculate(10, 20)); // 30
// //   console.log(calculate("10", "20")); // We Don't Need This To Work
//   console.log(calculate(+true, +true)); // 2

// -----------------

// function printInfo(valueOne:(string|number), valueTwo:(string|number)) {
//     return `Value One Is ${valueOne}, Value Two Is ${valueTwo}`;
// }

//   console.log(printInfo(10, 20)); // Value One Is 10, Value Two Is 20
//   console.log(printInfo("10", "20")); // Value One Is "10", Value Two Is "20"
//   console.log(printInfo(true, [1, 2, 3])); // We Don't Need This To Work

// ------------------------

// function reportErrors(username: string, age: number):string {
//     let rank = "Professor";
//     return `Username: ${username} `;
//     console.log("We Will Not Reach Here");
//   }
  
//   console.log(reportErrors("Elzero", 40));

// -------------------------

// let nothing;
// let theName: string = "ilorez";
// function showMyDetails(a = "", b = "", c:string) {
//   return `${a}${b}${c}`;
// }

// // Replace ???? With The Available Variables As Argument To Get The Result
// console.log(showMyDetails(undefined,nothing,theName)); // Elzero

// ---------------------

// function showMsg(user?: string, age?: (number|string), country?: string) {
//     return `${user}${age}${country}`;
//   }
  
//   console.log(showMsg());
//   console.log(showMsg("Elzero"));
//   console.log(showMsg("Elzero", 40));
//   console.log(showMsg("Elzero", "40", "Egypt"));

// -----------------------

// // Write The Function Here
// function printInConsole (...params:(string|number|boolean)[]) {
//     params.forEach((p)=> console.log(`The Value Is ${p} And Type Is ${typeof p}`))
//     return 'done';
// }
// // Using The Function => Do Not Edit
// console.log(printInConsole(1, 2, 3, 4, 5));
// console.log(printInConsole("A", "B", "C"));
// console.log(printInConsole(true, false, false, true, true));

// // -----------------------

// // function addAll(...nums: number[]) : number {
// //     let result = 0;
// //     // for (let i = 0; i < nums.length; i++) {
// //     //   console.log(nums[i])
// //     // }
// //     nums.forEach((num) =>console.log(num));
// //     return result;
// //   }
  
// //   console.log(addAll(10, 20, 30, 100, 10.5, +true));