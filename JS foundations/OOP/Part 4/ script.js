

class User {
    // Private Property
    #e;
    constructor(id, username, eSalary) {
        this.i = id;
        this.u = username;
        this.#e = eSalary;
    }
    getSalary() {
        return parseInt(this.#e);
    }
    getAdminSalary() {
        return "aa"
    }
}
class Admin extends User {
    constructor(id, username, eSalary, prem) {
        super(id, username, eSalary);
        this.p = prem;
    }
    getAdminSalary() {
        // return this.#e; //---------------- SyntaxError: Private field '#e' must be declared in an enclosing class
        return 'admin salaray'
    }
}


let userOne = new User(100, "Elzero", "5000 Gneh");
let userAdmin = new Admin(120, "Elzero", "5001 Gneh", 1);

console.log(userOne.u);
console.log(userOne.getSalary() * 0.3);

console.log("###")
// console.log(userAdmin.#e) //---------------- SyntaxError: Private field '#e' must be declared in an enclosing class
// console.log(userAdmin.getAdminSalary()) //----------- SyntaxError: Private field '#e' must be declared in an enclosing class
console.log(userAdmin.getSalary()) // 5001

