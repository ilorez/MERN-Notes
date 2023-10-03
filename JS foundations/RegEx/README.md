# Regular Expression





## Table of Content
- [Part 1](#part-1) 
- [Part 2](#part-2) 
- [Part 3](#part-3) 
- [Part 3](#part-3) 
- [part 4](#part-4) 
- [Part 5](#part-5) 
- [Part 6](#part-6) 
- [Part 7](#part-7) 
 
## Part 1

### Syntax

/pattern/modifier(s);

new RegExp("pattern", "modifier(s)")

### Modifiers => Flags

i => case-insensitive

g => global

m => Multilines

### Search Methods

- match(Pattern)

Match

-- Matches A String Against a Regular Expression Pattern

-- Returns An Array With The Matches

-- Returns null If No Match Is Found.

```javascript
let myString = "Hello Elzero Web School I Love elzero";

let regex = /elzero/gi;

console.log(myString.match(regex));
//output: [Elzero, elzero]
```

## Part 2

### Ranges

- Part A

  (X|Y) => X Or Y

  [0-9] => 0 To 9

  [^0-9] => Any Character Not 0 To 9

- Part B

  [a-z]

  [^a-z]

  [A-Z]

  [^A-Z]

  [abc]

  [^abc]

## Part 3

### Character Classes

. => matches any character, except newline or other line terminators.

\w => matches word characters. [a-z, A-Z, 0-9 And Underscore]

\W => matches Non word characters

\d => matches digits from 0 to 9.

\D => matches non-digit characters.

\s => matches whitespace character.

\S => matches non whitespace character.

```js
let email = "O@@@g...com O@g.com O@g.net A@Y.com O-g.com o@s.org 1@1.com";
let dot = /./g;
let word = /\w/g;
let valid = /\w@\w.(com|net)/g;
console.log(email.match(dot));
console.log(email.match(word));
console.log(email.match(valid));
```

## Part 3

### Character Classes

\b => matches at the beginning or end of a word.

\B => matches NOT at the beginning/end of a word.

### Test Method

pattern.test(input)

```js
let names = "Sayed 1Spam 2Spam 3Spam Spam4 Spam5 Osama Ahmed Aspamo";
let re = /(\bspam|spam\b)/gi;
console.log(names.match(re));

console.log(re.test(names));
console.log(/(\bspam|spam\b)/gi.test("Osama"));
console.log(/(\bspam|spam\b)/gi.test("1Spam"));
console.log(/(\bspam|spam\b)/gi.test("Spam1"));
```

## part 4

### Quantifiers

- part A

  n+ => One Or More

  n\* => zero or more

  n? => zero or one

- part B

  n{x} => Number of

  n{x,y} => Range

  n{x,} => At Least x

- part C

  $ => End With Something

  ^ => Start With Something

  ?= => Followed By Something

  ?! => Not Followed By Something

#### p.A

```js
let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru"; // All Emails
// let mailsRe = /\w+@\w+.(com|net)/ig;
let mailsRe = /\w+@\w+.\w+/gi;
console.log(mails.match(mailsRe));

let nums = "0110 10 150 05120 0560 350 00"; // 0 Numbers Or No 0
let numsRe = /0\d*0/gi;
console.log(nums.match(numsRe)); // output: [ '0110', '05120', '0560', '00' ]

let urls = "https://google.com http://www.website.net web.com"; // http + https
let urlsRe = /(https?:\/\/)?(www.)?\w+.\w+/gi;
console.log(urls.match(urlsRe)); //output: [ 'https://google.com', 'http://www.website.net', 'web.com' ]
```

#### p.B

```js
let serials = "S100S S3000S S50000S S950000S";

console.log(serials.match(/s\d{3}s/gi)); // S[Three Number]S
console.log(serials.match(/s\d{4,5}s/gi)); // S[Four Or Five Number]S
console.log(serials.match(/s\d{4,}s/gi)); // S[At Least Four]S
```

#### p.C

```js
let myString = "We Love Programming";
let names = "1OsamaZ 2AhmedZ 3Mohammed 4MoustafaZ 5GamalZ";

console.log(/ing$/gi.test(myString));
console.log(/^we/gi.test(myString));
console.log(/lz$/gi.test(names));
console.log(/^\d/gi.test(names));

console.log(names.match(/\d\w{5}(?=Z)/gi));
console.log(names.match(/\d\w{8}(?!Z)/gi));
```

## Part 5

    - replace

    - replaceAll

```js
let txt = "We Love Programming And @ Because @ Is Amazing";
console.log(txt.replace("@", "JavaScript"));
console.log(txt.replaceAll("@", "JavaScript"));
let re = /@/gi;
console.log(txt.replaceAll(re, "JavaScript"));
console.log(txt.replaceAll(/@/gi, "JavaScript"));
```

## Part 6

### Form Validation

- Input Form Validation Practice

```html
<form id="register" action="" method="get">
  <input type="text" id="phone" name="the-phone" maxlength="15" />
  <input type="submit" value="Register" />
</form>
```

```js
document.getElementById("register").onsubmit = function () {
  let phoneInput = document.getElementById("phone").value;
  let phoneRe = /\(\d{4}\)\s\d{3}-\d{4}/; // (1234) 567-8910
  let validationResult = phoneRe.test(phoneInput);
  if (validationResult === false) {
    return false;
  }
  return true;
};
```

## Part 7

### partique

- Create RegExp that match all the urls

```js
let url1 = "elzero.org";
let url2 = "http://elzero.org";
let url3 = "https://elzero.org";
let url4 = "https://www.elzero.org";
let url5 = "https://www.elzero.org:8080/articles.php?id=100&cat=topics";

let re = /code here/;
console.log(url1.match(re));
console.log(url2.match(re));
console.log(url3.match(re));
console.log(url4.match(re));
console.log(url5.match(re));
```
