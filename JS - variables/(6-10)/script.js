
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//6 Task
let title = 'Once upon a time in hollywood';
let smallTitle = title.toLowerCase();

// let star = '*';
// let starTitle = smallTitle.replaceAll('o', star);
let starTitle = smallTitle.replaceAll('o', '*');

console.log(starTitle);
// console.log(typeof title, typeof smallTitle, typeof starTitle);


//7 Task
let numberOne = rand (0,2), numberTwo = rand (0,2), numberThree = rand (0,2), numberFour = rand (0,2); 
console.log(numberOne, numberTwo, numberThree, numberFour);

let countZero = 0,
    countOne = 0,
    countTwo = 0;

if (numberOne === 0) countZero++; 
else if (numberOne === 1) countOne++;
else countTwo++;

if (numberTwo === 0) countZero++;
else if (numberTwo === 1) countOne++;
else countTwo++;

if (numberThree === 0) countZero++;
else if (numberThree === 1) countOne++;
else countTwo++;

if (numberFour === 0) countZero++;
else if (numberFour === 1) countOne++;
else countTwo++;

console.log(`Zero's - ${countZero}\tOne's - ${countOne}\tTwo's - ${countTwo}`);
// console.log("Zero's -", countZero);
// console.log("One's - ", countOne); 
// console.log("Two's - ", countTwo);

 
//8 Task
let one = rand (0,4),
    two = rand (0,4);
    console.log(one, two);

if (one===0 || two===0) console.log(`Dalyba iš 0 negalima`);

else {
    if (one === two)  console.log((1).toFixed(2));
    // result=1;
    // console.log(result);console.log(result.toFixed(2));

    else if (one>=two) console.log((one/two).toFixed(2));
    // result = one / two;
    // console.log(result);console.log(result.toFixed(2));

    else console.log((two/one).toFixed(2));
    // result = two / one;
    //console.log(result);console.log(result.toFixed(2));
}

//9 Task

let sk1 = rand(0, 25),
    sk2 = rand(0, 25),
    sk3 = rand(0, 25);
console.log(sk1, sk2, sk3);

let big = Math.max (sk1, sk2, sk3), 
    small = Math.min (sk1, sk2, sk3);

if (sk1 !== big && sk1 !== small) console.log(sk1);
else if (sk2 !== big && sk2!== small) console.log(sk2);
else if (sk3 !== big && sk3!== small) console.log(sk3);
else console.log (`no middle value`);


// if (c<a && c>b) {console.log(c)}
// else if (c>a && c<b) {console.log(c)}
// else if (a<b && a>c) {console.log(a)}
// else if (a>b && a<c) {console.log(a)}
// else if (b<a && b>c) {console.log(b)}
// else if (b>a && b<c) {console.log(b)}
// else if (b==c || a==b || a==c)  {console.log('no middle value')}


// N/A Task
let actorName = 'Johnny'; 
let actorSurname = 'Depp';
let initials = actorName[0] + actorSurname[0]; 

console.log(initials);
// console.log(typeof actorName,typeof actorSurname,typeof initials);

  
//10 Task 
let letter1 = rand(97, 122);
let letter2 = rand(97, 122);
let letter3 = rand(97, 122);
console.log(String.fromCharCode(letter1), String.fromCharCode(letter2), String.fromCharCode(letter3));
console.log(typeof letter1, typeof letter2, typeof letter3);

let result =
String.fromCharCode(letter1) + 
String.fromCharCode(letter2) +
String.fromCharCode(letter3);

console.log(result);
console.log(typeof result);


// Short version:
// console.log (
// String.fromCharCode(rand(97, 122)) +
//  String.fromCharCode(rand(97, 122)) + 
//  String.fromCharCode(rand(97, 122))
//  )