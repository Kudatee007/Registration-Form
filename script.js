// alert("welcome to tech")
console.log(34);
console.log('come here');

let age =35
console.log(age);

let word = 'come here'
console.log(word);

let word1 = 'this class want to finish me with questions oh i need help'
console.log(word1);

// DIFFERENT DATA TYPES
// mumbers : 1, 2, 3, e.t.c
// string : 'hello' "string"
// boolean : true/false
// Null L Explicity set of variable with no values 
// undefined : for variables that have not yet been defined
// object : complex data structure -arrays



// string
let name = 'naseer'
let amount = '1 million'

console.log('mr ' + name + ' has ' + amount + ' naira ');

let word2 ='mr ' + name + ' has ' + amount + ' naira '
console.log(word2);

// string property
// put .length to know the numbers of characters

let prep = word1.length
console.log(prep);

console.log(word1.length);

// string method
let car = 'BENZ'
console.log(car);
console.log(car.toLowerCase());

let carr = 'bentley'
// console.log(car);
console.log(carr.toUpperCase());

// indefOf - to show the position of the item
let email = 'lorence@yahoo.com'
console.log(email.indexOf('@'));

// slice method
console.log(email.slice(5,6));

//REPLACE METHOD
console.log(email.replace('r', 'k'));
console.log(email.substr('5', '6'));
console.log(email.substring('5', '6'));

// TODAY
let division = 200%21
console.log(division);

var rad = 5
var pi = (22/7)

let area = pi * rad ** 2
console.log(area);

// ORDER OF OPERATION - BIDMAS
let wale = 10*(10-3)**2-10+30
console.log(wale);

let fans = 20
let fan = 50
fans = fan + fans + 100
console.log(fans);  
console.log(7**3);

// DECREMENT  SUBSTRACTS 1
let bag = 10
bag = bag + 90
bag++
console.log(bag);

//INCREMENT  ADDS 1
let bag1 = 10
bag1 = bag1 + 90
bag1++
console.log(bag1);

// NAN -- not a number

// TEMPLATE STRINGS OR TEMPLATE LITERALS
let namee = 'chibuzor'
let amountt = '1 billion $'
let spend = 'spends it wisely on women'
// SAME RESULT WITH DIFF METHOD
let clause = 'mr ' + namee + ' has ' + amountt + ' and he ' + spend
console.log(clause);

let clause1 = `mr ${namee} has ${amountt} naira sand likes to ${spend}`
console.log(clause1);

document.body.innerHTML = 'i want to climb high'
let x;
x = 5
x = 'john'
console.log(x);

// ARRAYS
people = [
    { name: 'tommy', age: 24, hubby: 'swimming' },
    { name: 'abdul', age: 29, hubby: 'talking' },
    { name: 'wale', age: 26, hubby: 'singing' },
]

names = ['tola', 'banty', 'abdul', 'wale', 'sunny', 'Timi', 'Tommy', 'luqman']
console.log(names);

// ARRAYS METHOD
let port = names.join(' or ')
console.log(port);

document.body.innerHTML = `<h1>${port}</h1>`

// CONCAT To add 
let port2 = names.concat('naseer', 'fawaz')
console.log(port2);

// BOOLEAN
console.log(true, false)
// boolean and comparison
let ages = 60;

console.log(ages == 55);
console.log(ages == 60);
console.log(ages != 60);
console.log(ages >= 45);
console.log(ages <= 75);

let namea = 'fawaz'

console.log(namea == 'emeka');
console.log(namea == 'Fawaz');
console.log(namea > 'Fawaz');
console.log(namea > 'emeka');
console.log(namea > 'sunny');

// loose comparison (different types can still be equal)
let age3 = 60

console.log(age == 60);
console.log(age == '60');
console.log(age != '60');

// strict comparison (different types can not be equal)

console.log(age === 60);
console.log(age === '60');
console.log(age !== '60');

// NULL AND UNDEFINED
let count = null
console.log(count, count+5, `the number of item is ${count}`);

// CONDITIONAL STATEMENT
let age4 = 50;
if (age4 < 70) {
    console.log('you are still young go enjoy life');
}
else{
    console.log('you are now old am sorry');
}

// let cars1 = 'benz'
// let amounts = '10 million'

// console.log('mr kuda t has a ' + cars1 + ' car he bought ' + amounts );
//  let viki = 'mr kuda t has a ' + cars1 + ' car he bought ' + amounts
//  console.log(viki);
//  console.log(`mr kuda t has a ${cars1} car he bought ${amounts}`);
// let vikis = `mr kuda t has a ${cars1} car he bought ${amounts} today`
// console.log(vikis);

let timi = 'dreamland'
console.log(timi.length);
console.log(timi.toUpperCase());


