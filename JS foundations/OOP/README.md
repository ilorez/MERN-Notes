# OOP JavaScript

Object-Oriented Programming (OOP) is a programming paradigm that organizes code into `objects` which are instances of `classes`. It promotes concepts like `encapsulation, inheritance, polymorphism, and abstraction` to enhance code organization, reusability, and flexibility. OOP enables modeling real-world entities and their interactions through a structured approach, improving code maintainability and scalability. Common OOP languages include Java, Python, C++, and more.

## Part 1 - Create , Update Properties/Methodes And Built In Constructors

## Part 2 - Class Static Properties And Methods

- Static Properties: A static property is a property that is created for the class itself and is not accessible from instances of the class. For example:

```js
class User {
  static count = 0;

  constructor() {}

  method1() {}
  method2() {}
}
```

In this example, count is a static property for the User class. If we create an instance of User, we cannot access it from that instance:

```js
const user = new User();
console.log(user.count); // Output: undefined
```

Static Method: A static method serves a similar purpose to static properties. You can create a static method by adding the static keyword before the method name, like this:

```js
static method1() {
    // Implementation
}
```
