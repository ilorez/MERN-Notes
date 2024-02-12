"use strict";
class Player {
    get level() {
        return this._level;
    }
    set level(value) {
        this._level = value;
    }
    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    constructor(_id, _title, _level) {
        this._id = _id;
        this._title = _title;
        this._level = _level;
    }
    logIn() {
        console.log('Logged In');
    }
    logOut(msg) {
        console.log(`logged Out, ${msg}`);
    }
}
let player1 = new Player(100, "Elzero", 95);
console.log(player1.id);
console.log(player1.title);
console.log(player1.level);
player1.logIn();
player1.logOut("Good Bye");
//# sourceMappingURL=e3.js.map