"use strict";
let userd = {
    id: 100,
    username: "Elzero",
    country: "Egypt",
    sayHello() {
        return `Hello ${this.username}`;
    },
    sayWelcome: () => {
        return `Welcome ${user.username}`;
    },
    getDouble(n) {
        return n * 2;
    }
};
console.log(userd.id);
console.log(userd.sayHello());
console.log(userd.sayWelcome());
console.log(userd.getDouble(100));
//# sourceMappingURL=index.js.map