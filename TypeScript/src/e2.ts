// // Write Your Code Here
// type Info = {
//   theName:string,
//   theAge:number
// }

// type Full = Info & {
//   country: string
// }
// // Do Not Edit Here
// function showInfo(data: Info) {
//   console.log(`The Name Is ${data.theName}`);
//   console.log(`The Age Is ${data.theAge}`);
// }
// console.log(showInfo({ theName: "Elzero", theAge: 40 }));


// function showFullInfo(data: Full) {
//   console.log(`The Name Is ${data.theName}`);
//   console.log(`The Age Is ${data.theAge}`);
//   console.log(`The Country Is ${data.country}`);
// }
// console.log(showFullInfo({ theName: "Elzero", theAge: 4, country: "Egypt" }))


// -----------------

// function yesOrNo(val: number) : boolean {
//   return val > 10;
// }

// // Do Not Edit Here
// console.log(yesOrNo("100")); // Error
// console.log(yesOrNo(30)); // True
// console.log(yesOrNo(8)); // False

// ------------------
// type custom = "Yes" | 'No'
// function isHeOld(age: number ) : custom {
//   return age > 40 ? 'Yes' : 'No';
// }

// // Do Not Edit Here
// console.log(isHeOld("100")); // Error
// console.log(isHeOld(45)); // "Yes"
// console.log(isHeOld(30)); // "No"


// ----------------

// let post : readonly [number, string, boolean];

// // post = [100, 200, "Title"]; // Error
// // post = ["Title", 100, true]; // Error
// post = [100, "Title", true]; // Good

// // post.push("Elzero"); // Error => Cant Add

// // Create Destructuring Here

// let [id,title, state] = post

// // Do Not Edit Here
// console.log(id); // 100
// console.log(title); // "Title"
// console.log(state); // true

// ------------

// // Create Enums + Function Here
// function getInsane(num:number):number{
//   return num - Game.Hard
// }

// enum Game  {
//   Easy = 100,
//   Medium = Easy - 20,
//   Hard = Medium - (Easy / 2),
//   Insane =  getInsane(Easy / 2)
// } 

// // Output
// console.log(Game.Easy); // 100
// console.log(Game.Medium); // 80
// console.log(Game.Hard); // 30
// console.log(Game.Insane); // 20

// --------------

// const user: {
//   username: string,
//   age: string | number,
//   website?: string,
//   skills: {
//     frontEnd: string[],
//     backEnd: (number | string)[]
//   }
// } = {
//   username: "Elzero",
//   age: 40,
//   website: "Elzero.org",
//   skills: {
//     frontEnd: ["HTML", "CSS", "JS"],
//     backEnd: ["PHP", "Python"]
//   }
// }

// // We Need To Remove Error From This Edits
// user.username = "Osama";
// user.age = "40";
// user.skills.backEnd.push(100);