// let pack = 45
// let word = 'welcome'
// console.log(word);

// let age = 25
// console.log(age ==25);

// DATA TYPES

// NUMBERS
let age = 35
let year = 2022
console.log(age,year);
console.log(age + year);

// STRINGS
let word = 'i go do am oh'
console.log(age * word);
console.log(age + word);

let statement = 'what am i going to eat'
console.log(statement);

// STRING CONCATENATION
let name = 'Marcus'
let work = 'is going to fight'

let word1 = 'which mr ' + name + ' is it that ' + work

let email = 'williams@gmail.com'
console.log(email);
console.log(email.length);

// STRING METHOD
console.log(email.toUpperCase());
console.log(word1.toLowerCase());

// SLICE METHOD
console.log(email.slice(0,7));
let gat = email.slice(7,14)
console.log(gat);
console.log(email.slice(7,14));

console.log(email.substr(5, 9));
console.log(email.substr(9, 4));
console.log(email.substring(3, 7));
console.log(email.substring(7, 3));

// Math operators +, -, *, /, **, %

// TEMPLATE LITERALS
let name1 = 'kaolite'
let food = ' rice and eba'

let clause = 'this man called ' + name1 +  " i like eating " + food
console.log(clause);

let Clause = `this man called ${name1} i like eaing ${food}`
console.log(Clause);

// ARRAYS
// DEALS WITH VARIABLE WHICH IS EQUAL TO A SQUARE BLOCK AND EACH OF THE ITEM SEPERATED BY COMMA
// variable = [items, items, items]

let hero = ['spiderman', 'batman', 'merlin', 'superman', 'antman', 'charles', 'greenland']
console.log(hero.length);
console.log(hero[3]);
console.log(hero[6]);

//ARRYS METHOD
// join method
console.log(hero.join(' is stronger '));

//CONCAT METHOD
let vigilante = hero.concat('sango', 'hulk')
console.log(vigilante);
console.log(hero);

// PUSH METHOD
let pushItem = hero.push('omega')
console.log(pushItem);
console.log(hero);

// let x;
// let y;
// x = prompt('Enter a number');
// y = prompt('Enter another number');
// let result = Number(x) + Number(y);
// alert(`we have ${result} number of carts`)

// CONDITIONAL STATEMENT
// if statement or conditional statement

const ages = 45
if (ages > 22) {
    console.log('you are 45 years old');
}
else{
    console.log('you dont know your age');
}

let names = [
    'sonny', 'emeka', 'abdul', 'kelvin', 'qudus', 'wale'
]
if (names.length < 5) {
    console.log('there is need for checkmates');
}
else{
    console.log('there is need for checkmates');
}

// const password = 'p@ss';
// if (password >= 8) {
//     console.log('that password is long enough!');
// }else{
//     console.log('password is not long enough');
// }

// ELSE IF
const password = 'p@ssword5679ret';
if (password.length >= 15) {
    console.log('that password is mighty strong');
}else if (password.length>=10) {
    console.log('password is just normally strong');
}else {
    console.log('password is not too long');
}

const password1 = 'p@ss679ret';
if (password1.length >= 15  && password1.includes) {
    console.log('that password is mighty strong');
}else if (password1.length >= 10 || password1.includes) {
    console.log('password is just normally strong');
}else {
    console.log('password is not too long');
}

// LOGICAL NOT
let user = !false;
if(user){
    console.log('you are now validated');
}

// BREAK AND CONTINUE
const scores = [24, 67, 35, 78, 0, 13, 45, 100, 52, 99, 17, 36]
for(let i =0; i < scores.length; i++){
    console.log('your perfomances are:', scores[i]);
    break;

    if (scores[i] === 100) {
        console.log('oh boy! you know book oh');
        break;
         
     }
    
    
}


// GLOBAL VARIABLE AND BLOCK SCOPE

let count = 50;

if(true){
    let count  = 78
    let name = 'Emeka'
    console.log('inside the first code block', count, name);

    if(true) {
        let count = 'TOO MANY'
        console.log('inside the SECOND code block', count, name);
    }
}

// LOGICAL OPERATIONS OR '||' and AND &&
