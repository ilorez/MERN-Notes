function* generateNumbers() {
    let index = 0;

    while (true) {

        yield index++;

    }

}

let generator = generateNumbers();

console.log(generator.next()); // 1
console.log(generator.next()); // 2
console.log(generator.next()); // 3
console.log(generator.next()); // 4
console.log(generateNumbers())
