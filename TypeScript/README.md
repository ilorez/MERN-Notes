# TypeScript

## Table of Content

- [TypeScript](#typescript)
  - [Table of Content](#table-of-content)
  - [Setup](#setup)
    - [create config file in you dir](#create-config-file-in-you-dir)
    - [config notes tsconfig file](#config-notes-tsconfig-file)
    - [start ts combining](#start-ts-combining)
  - [Statically vs Dynamically Typed Languages](#statically-vs-dynamically-typed-languages)
  - [Type Annotations And Any Type](#type-annotations-and-any-type)
  - [Type Annotations With Array](#type-annotations-with-array)
  - [Type Annotations With Multidimensional Arrays](#type-annotations-with-multidimensional-arrays)
  - [Type Annotations With Functions](#type-annotations-with-functions)
  - [Optional And Default Parameter](#optional-and-default-parameter)
    - [Function Rest Parameter](#function-rest-parameter)
  - [Anonymous And Arrow Function](#anonymous-and-arrow-function)
  - [Data Types](#data-types)
    - [Type Alias](#type-alias)
    - [Advanced Type Alias](#advanced-type-alias)
    - [Literal Types](#literal-types)
    - [Tuple](#tuple)
    - [Void](#void)
    - [Never](#never)
    - [Enums](#enums)
    - [Type Assertions](#type-assertions)
  - [Type Annotations With Object](#type-annotations-with-object)
  - [Interface](#interface)
    - [Interface Declaration](#interface-declaration)
    - [Interface Method And Parameters](#interface-method-and-parameters)
    - [ReOpen The Interface And Use Cases](#reopen-the-interface-and-use-cases)
    - [Extending Interfaces](#extending-interfaces)
    - [Interface vs Type Alias](#interface-vs-type-alias)
    - [HTMLElement Interface](#htmlelement-interface)
  - [Class](#class)
    - [Type Annotations With Class](#type-annotations-with-class)
    - [Data Access Modifiers \& Parameters Properties](#data-access-modifiers--parameters-properties)
    - [Get And Set Accessors](#get-and-set-accessors)
    - [Static Members](#static-members)
    - [Implement Interface](#implement-interface)
    - [Abstract Classes And Members](#abstract-classes-and-members)
    - [Polymorphism \& Method Override](#polymorphism--method-override)
  - [Generics](#generics)
    - [Generics Multiple Types](#generics-multiple-types)
    - [Classes](#classes)

## Setup

### create config file in you dir

```shell
    tsc --init
```

### config notes tsconfig file

```json
"rootDir": "./src"
"sourceMap": true
"outDir": "./dist"
"removeComments": true
```

### start ts combining

```shell
    tsc -w
```

it's will use the rootDir to get ts files and combine it and set it on outDir file

## Statically vs Dynamically Typed Languages

Statically Typed Language Like [Rust, C, C++]

- Variables Types Are Static, Once You Declare It You Cannot Change
- Type Of A Variable Is Known At Compile Time "Do Type Checking At Compile-Time"
--- Have Better Performance At Run-Time Due To Not Needing To Check Types Dynamically
- Error Detected Earlier

Dynamically Typed Language Like [PHP, Python, JavaScript]

- Variables Types Are Dynamic, You Can Always Change It
- "Type Checking At Execution-Time"
- Error Can Be Detected After Execution

For : **JS**

```js
// let num = 10;
// num = "Ilorez";
// console.log(num);

let age = 40;
if (age > 30) {
  console.log("Good");
} else {
  console.log(age.repeat(3)); 
}
```

For : **TS**

```ts
// let num = 10;
// num = "Ilorez"; // Error : Type 'string' is not assignable to type 'number'
// console.log(num); 

let age = 40;
if (age > 30) {
  console.log("Good");
} else {
  console.log(age.repeat(3)); // it's said there is a error here because the repeat function is not a number function
}
```

## Type Annotations And Any Type

Type Annotations || Signature

- Indicate The Data Type Of Variables
- Indicate The Data Type Of Functions Input/Output
- Objects, etc.
- Why We Use It ?
- Is It Mandatory ?
- What Happen If We Didnt Use It ?

```ts

let theName = "najdaoui";
let theAge: number = 40;
let hire: boolean = true;
let all: any = "Hello World";
let allVars; // Any

theName = "zobair";
all = 100;
```

```ts
function add(n1, n2) { // Error : required to add type of n1 and n2
  return n1 + n2;
}

console.log(add(10, "20")); 
console.log(typeof add(10, "20"));
```

```ts
function add(n1: number, n2: number) {
  return n1 + n2;
}

console.log(add(10, 20));
console.log(typeof add(10, 20));
```

## Type Annotations With Array

```ts
let all: string | number | boolean = "ilorez";

all = "A";
all = 100;
all = true;

let myFriends: string[] = ["ilyass", "hamaza", "bouba",'zlmadi'];

for (let i = 0; i < myFriends.length; i++) {
  console.log(myFriends[i].repeat(3));
}
```

## Type Annotations With Multidimensional Arrays

```ts
let arrayOne: number[] = [1, 2, 3, 4, 5];
let arrayTwo: string[] = ["A", "B", "C"];
let arrayThree: (string | number)[] = [1, 2, 3, 4, "A", "B", "C"];

let arrayFour: (string | number | string[] | boolean)[] = [1, 2, 3, 4, "A", "B", ["C", "D"], true, false];
```

## Type Annotations With Functions

- noImplicitAny

- noImplicitReturns
  --- Will Check All Code Paths In A Function To Ensure They Return A Value

- noUnusedLocals
  --- Report Errors On Unused Local Variables

- noUnusedParameters
  --- Report Errors On Unused Parameters In Functions.

```ts
let showMsg = true;

function showDetails(name: string, age: number, salary: number) : string {
  let test = 10;
  if (showMsg) {
    return `Hello ${name}, Age Is ${age}, Salary Is ${salary}, Test Variable ${test}`;
  }
  return `No Data To Show`;
}

console.log(showDetails("Ilorez", 20, 5000));
```

## Optional And Default Parameter

Function

- Optional and Default Parameters
- In JavaScript, Every Parameter Is Optional => "undefined" If You Didnt Use It
- "?" Optional Parameter

```ts
function showData(name?: string, age?: number, country?: string) {
  return `${name} - ${age} - ${country}`;
}

console.log(showData("Ilorez", 20, "Morocco"));
```

### Function Rest Parameter

- Rest Parameter
- What About Float => All Is Under Type Number

```ts
function addAll(...nums: number[]) : number {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result += nums[i];
  }
  // nums.forEach((num) => result += num);
  return result;
}

console.log(addAll(10, 20, 30, 100, 10.5, +true));
```

- Note:

```ts
    addAll(...parameters){}
```

If you don't know this is called Rest Parameter and we use it if we don't know the number of parameter that we have and it's give you the parameters in an array.

## Anonymous And Arrow Function

- Anonymous Function
- Arrow Function

```ts
const add = function(num1: number, num2: number) : number {
  return num1 + num2;
}

console.log(add(10, 20));

const addWithArrow = (num1: number, num2: number) : number => num1 + num2;

console.log(addWithArrow(10, 20));
```

## Data Types

### Type Alias

```ts
type st = string;
let theName: st = "Ilorez";
theName = "najdaoui";

type standnum = string | number;
let all: standnum = 10;
all = 100;
all = "najdaoui";
```

### Advanced Type Alias

```ts
type Buttons = {
  up: string,
  right: string,
  down: string,
  left: string
}

type Last = Buttons & {
  x: boolean
}

function getActions(btns: Last) {
  console.log(`Action For Button Up Is ${btns.up}`);
  console.log(`Action For Button Right Is ${btns.right}`);
  console.log(`Action For Button Down Is ${btns.down}`);
  console.log(`Action For Button Left Is ${btns.left}`);
}

getActions({ up: "Jump", right: "Go Right", down: "Go Down", left: "Go Left", x: true });
```

### Literal Types

```ts
type nums = 0 | 1 | -1;

function compare(num1: number, num2: number) : nums {
  if (num1 === num2) {
    return 0;
  } else if (num1 > num2) {
    return 1;
  } else {
    return -1;
  }
}

console.log(compare(20, 20)); // 0
console.log(compare(20, 15)); // 1
console.log(compare(20, 30)); // -1

let myNumber: nums = 1;
```

### Tuple

- Is Another Sort Of Array Type
- We knows Exactly How Many Elements It Contains
- We Knows Which Types It Contains At Specific Positions

```ts
let article: readonly [number, string, boolean] = [11, "Title One", true];
article = [12, "Title Two", false];
// article.push(100);
console.log(article);

const [id, title, published] = article;
console.log(id);
console.log(title);
console.log(published);
```

### Void

- Function That Will Return Nothing
- Function In JavaScript That Not Return A Value Will Show undefined
- undefined is not void

```ts

function logging(msg: string) : void {
  console.log(msg);
  return;
}

console.log(logging("Iam A Message"));
console.log("Test");
```

### Never

- Return Type Never Returns
- The Function Doesn't Have A Normal Completion
- It Throws An Error Or Never Finishes Running At All "Infinite Loop"

```ts

const fail = (msg: string) => {
  throw new Error(msg); // beacause it's throw a error it's will never return any return because the funtion will never be complete
  // return 10;
}

function alwaysLog(name: string) : never {
  while(true) {
    console.log(name);
  } // beacause it's infiny loop it's will never return any return because the funtion will never be complete
}

alwaysLog("Ilorez");
// console.log("Test");
```

### Enums

Enums => Enumerations

- Allow Us To Declare A Set Of Named Constants
- Used For Logical Grouping Collection Of Constants "Collection Of Related Values"
- It Organize Your Code
- By Default Enums Are Number-Based, First Element Is 0
- Theres A Numeric Enums
- Theres A String-Based Enums
- Theres Heterogeneous Enums [String + Number]

```ts

const KIDS = 15;
const EASY = 9;
const MEDIUM = 6;
const HARD = 3;

enum Level {
  Kids = 15,
  Easy = 9,
  Medium = 6,
  Hard = 3
}

let lvl: string = "Easy";

if (lvl === "Easy") {
  console.log(`The Level Is ${lvl} And Number Of Seconds Is ${Level.Easy}`);
}
```

- Enum Can Refer To Other Enum
- Enum Can Refer To Same Enum
- Enum Can Have Calculations
- Enum Can Have Functions

```ts

function getHardSeconds() : number {
  return 3;
}

enum Kids {
  Five = 25,
  Seven = 20,
  Ten = 15
}

enum Level {
  Kid = Kids.Ten,
  Easy = 9,
  Medium = Easy - 3,
  Hard = getHardSeconds()
}

let lvl: string = "Easy";

if (lvl === "Easy") {
  console.log(`The Level Is ${lvl} And Number Of Seconds Is ${Level.Hard}`);
}
```

### Type Assertions

- Sometime Compiler Doesnt Know The Information We Do

```ts
// let myImg = document.getElementById("my-img") as HTMLImageElement;
let myImg = <HTMLImageElement> document.getElementById("my-img");
console.log(myImg.src);
```

- TypeScript Is Not Performing Any Check To Make Sure Type Assertion Is Valid

```ts
let data: any = 1000;
console.log((data as string).repeat(3)); // no error has showed
```

## Type Annotations With Object

```ts
let myObject: {
  readonly username: string,
  id: number,
  hire?: boolean,
  skills: {
    one: string,
    two: string
  }
} = {
  username: "my-string",
  id: 100,
  hire: true,
  skills: {
    one: "HTML",
    two: "CSS"
  }
};

// myObject.username = "Ilorez";
myObject.id = 101;
myObject.hire = false;

console.log(myObject.username);
console.log(myObject.id);
console.log(myObject.hire);
console.log(myObject.skills.one);
```

## Interface

### Interface Declaration

- Serve Like Types
- The Interface Describes The Shape Of An Object
- It Defines The Syntax To Follow

- Use With Object
- Use With Function
- Use Read Only And Optional Operator

The main difference between types and interfaces is how they are used. Types are used to create new names for existing types, while interfaces are used to define the structure of objects, classes, and functions

```ts
interface User {
  id?: number,
  readonly username: string,
  country: string
}

let user: User = {
  id: 100,
  username: "Ilorez",
  country: "Maroc"
}

user.country = "Algeria";

console.log(user);

function getData(data: User) {
  console.log(`Id Is ${data.id}`);
  console.log(`Username Is ${data.username}`);
  console.log(`Country Is ${data.country}`);
}

getData({ id: 200, username: "Najdaoui", country: "Palestine" });
```

### Interface Method And Parameters

```ts

interface User {
  id: number;
  username: string;
  country: string;
  sayHello() : string;
  sayWelcome: () => string;
  getDouble(num: number) : number;
}

let user: User = {
  id: 100,
  username: "Ilorez",
  country: "Morocco",
  sayHello() {
    return `Hello ${this.username}`;
  },
  sayWelcome: () => {
    return `Welcome ${user.username}`;
  },
  getDouble(n) {
    return n * 2;
  }
}

console.log(user.id);
console.log(user.sayHello());
console.log(user.sayWelcome());
console.log(user.getDouble(100));
```

### ReOpen The Interface And Use Cases

```ts
// Homepage
interface Settings {
  readonly theme: boolean;
  font: string;
}

// Articles Page
interface Settings {
  sidebar: boolean;
}

// Contact Page
interface Settings {
  external: boolean;
}

let userSettings: Settings = {
  theme: true,
  font: "Open Sans",
  sidebar: false,
  external: true
}
```

### Extending Interfaces

```ts
interface User {
  id: number;
  username: string;
  country: string;
}

interface Moderator {
  role: string | number;
}

interface Admin extends User,Moderator {
  protect?: boolean;
}

let user: Admin = {
  id: 100,
  username: "Ilorez",
  country: "Morocco",
  role: "Mod",
  protect: true
}

console.log(user.id);
```

### Interface vs Type Alias

- it's not like the Interface we can't open it and add some info to it.

```ts
type Settings {
  readonly theme: boolean;
  font: string;
  sidebar: boolean;
  external: boolean;
}

let userSettings: Settings = {
  theme: true,
  font: "Open Sans",
  sidebar: false,
  external: true
}

```

### HTMLElement Interface

```ts
let el = document.getElementById("id") as HTMLElement;
```

ctrl + click on VSCode fore open HTMLElement Interface

## Class

### Type Annotations With Class

```ts
class User {
  u: string;
  s: number;
  msg: () => string;
  constructor(username: string, salary: number) {
    this.u = username;
    this.s = salary;
    this.msg = function () {
      return `Hello ${this.u} Your Salary Is ${this.s}`;
    }
  }
  sayMsg() {
    return `Hello ${this.u} Your Salary Is ${this.s}`;
  }
}

let userOne = new User("Ilorez", 6000);

console.log(userOne.u);
console.log(userOne.s);
console.log(userOne.msg());
console.log(userOne.sayMsg());
```

### Data Access Modifiers & Parameters Properties

- Public
  - All Members Of A Class In TypeScript Are Public
  - All Public Members Can Be Accessed Anywhere Without Any Restrictions
- Private
  - Members Are Visible Only To That Class And Are Not Accessible Outside The Class
- Protected
  - Same Like Private But Can Be Accessed Using The Deriving Class

- TypeScript Is A Layer On Top Of JavaScript
- It Should Remove All Annotations And Although Access Modifiers "Private For Example"

```ts
class User {
  msg: () => string;
  constructor(private username: string, protected salary: number,public readonly address: string) {
    this.msg = function () {
      return `Hello ${this.username} Your Salary Is ${this.salary}`;
    }
  }
  sayMsg() {
    return `Hello ${this.username} Your Salary Is ${this.salary}`;
  }
}

let userOne = new User("Ilorez", 6000, "tasseltatne");

// console.log(userOne.username);
// console.log(userOne.salary);
console.log(userOne.msg());
console.log(userOne.sayMsg());
```

### Get And Set Accessors

```ts
class User {
  public get username(): string {
    return this._username;
  }
  public set username(value: string) {
    this._username = value;
  }
  msg: () => string;
  constructor(private _username: string, public salary: number, public readonly address: string) {
    this.msg = function () {
      return `Hello ${this._username} Your Salary Is ${this.salary}`;
    }
  }
  sayMsg() {
    return `Hello ${this._username} Your Salary Is ${this.salary}`;
  }
  // get username() : string {
  //   return this._username;
  // }
  // set username(value: string) {
  //   this._username = value;
  // }
}

let userOne = new User("Ilorez", 6000, "tasseltatne");

console.log(userOne.username);
userOne.username = "Ahmed";
console.log(userOne.username);
console.log(userOne.salary);
console.log(userOne.msg());
console.log(userOne.sayMsg());
```

### Static Members

- Don't Use "name, length, call"

```ts
class User {
  private static created: number = 0;
  static getCount() : void {
    console.log(`${this.created} Objects Created`);
  }
  constructor(public username: string) {
    User.created++;
  }
}

let u1 = new User("ilorez");
let u2 = new User("Web");
let u3 = new User("School");
// console.log(User.created);
User.getCount();
```

the idea here to understand the getters and setters and for that you need to use a language that complety work with privets and protects propertes --encapsilation and js doesn't,  getters and setters is use on to change or read a privet property.

### Implement Interface

```ts
interface Settings {
  theme: boolean;
  font: string;
  save(): void;
}

class User implements Settings {
  constructor(public username: string, public theme: boolean, public font: string) {}
  save(): void {
    console.log(`Saved`);
  }
  update(): void {
    console.log(`Updated`);
  }
}

let userOne = new User("Ilorez", true, "Open Sans");

console.log(userOne.username);
console.log(userOne.font);

userOne.save();
userOne.update();
```

the idea here to make a structure to your class

### Abstract Classes And Members

- We Cannot Create An Instance Of An Abstract Class

```ts
abstract class Food {
  constructor(public title: string) {}
  abstract getCookingTime() : void;
}

class Pizza extends Food {
  constructor(title: string, public price: number) {
    super(title);
  }
  getCookingTime() : void {
    console.log(`Cooking Time For Pizza Is 1 Hour`);
  }
}

class Burger extends Food {
  constructor(title: string, public price: number) {
    super(title);
  }
  getCookingTime() : void {
    console.log(`Cooking Time For Burger Is Half Hour`);
  }
}

let pizzaOne = new Pizza("Awesome Pizza", 100);

console.log(pizzaOne.title);
console.log(pizzaOne.price);
pizzaOne.getCookingTime();
```

### Polymorphism & Method Override

- Polymorphism
  - Classes Have The Same Methods But Different Implementations
- Method Override
  - Allowing Child Class To Provide Implementation Of A Method In Parent Class
  - A Method In Child Class Must Have Same Name As Parent Class

  - noImplicitOverride

```ts
class Player {
  constructor(public name: string) {}
  attack() : void {
    console.log("Attacking Now");
  }
}

class Amazon extends Player {
  constructor(name: string, public spears: number) {
    super(name);
  }
  override attack(): void {
    // super.attack();
    console.log("Attacking With Spear");
    this.spears -= 1;
  }
}

class Barbarian extends Player {
  constructor(name: string, public axeDurability: number) {
    super(name);
  }
  override attack(): void {
    // super.attack();
    console.log("Attacking With Axe");
    this.axeDurability -= 1;
  }
}

let barOne = new Barbarian("Ilorez", 100);

console.log(barOne.name);
barOne.attack();
console.log(barOne.axeDurability);
```

## Generics

- Help Write A Reusable Code
- Allow To Pass Type As A Parameter To Another Type
- You Will Be Able To Deal With Multiple Types Without Using ": Any Type"
- We Can Create:
  - Generic Classes
  - Generic Functions
  - Generic Methods
  - Generic Interfaces

```ts
function returnNumber(val: number) : number {
  return val;
}
function returnString(val: string) : string {
  return val;
}
function returnBoolean(val: boolean) : boolean {
  return val;
}

console.log(returnNumber(100));
console.log(returnString("Ilorez"));
console.log(returnBoolean(true));

function returnType<T>(val: T) : T {
  return val;
}

console.log(returnType<number>(100));
console.log(returnType<string>("Ilorez"));
console.log(returnType<boolean>(true));
console.log(returnType<number[]>([1, 2, 3, 4]));
```

### Generics Multiple Types

- Arrow Function
- Multiple Types
- Discussion

```ts
function returnType<T>(val: T): T {
  return val;
}

console.log(returnType<number>(100));
console.log(returnType<string>("Ilorez"));

const returnTypeArrowSyntax = <T>(val: T): T => val;

console.log(returnTypeArrowSyntax<number>(100));
console.log(returnTypeArrowSyntax<string>("Ilorez"));

function testType<T>(val: T): string {
  return `The Value Is ${val} And Type Is ${typeof val}`;
}

console.log(testType<number>(100));
console.log(testType<string>("Ilorez"));

function multipleTypes<T, S>(valueOne: T, valueTwo: S): string {
  return `The First Value Is ${valueOne} And Second Value ${valueTwo}`;
}

console.log(multipleTypes<string, number>("Najdaoui", 100));
console.log(multipleTypes<string, boolean>("Ilorez", true));
```

### Classes

```ts
class User<T = string> {
  constructor(public value: T) {}
  show(msg: T) : void {
    console.log(`${msg} - ${this.value}`);
  }
}

let userOne = new User<string>("Ilorez");
console.log(userOne.value);
userOne.show("Message");

let userTwo = new User<number | string>(100);
console.log(userTwo.value)
userTwo.show("Message");
```
