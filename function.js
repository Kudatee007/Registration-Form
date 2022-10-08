// FUNCTION DECLARATION
function drive() {
    console.log('i can drive');
    
}
drive()

// FUNCTION EXPRESSION
 const speak = function(name, time) {
    console.log(name, 'can ' + time + 'debate on their behalf this ' + name);
    
 }
 speak('sunny', 'day ')

 const speak1 = function(name) {
    console.log(name, 'can debate on their behalf this ' + name);
    
 }
 speak1('sunny')

 // ARGUMENTS OVER-RIDDEN
 const speak2 = function(name=david, time=night) {
   console.log(name, 'can ' + time +' debate on their behalf this ' + name);
 }
 speak2('dave', 'day')

//  the one outside supersedes the one inside

// RETURNING VALUES

const areaRectangle = function(lenght, breadth) {
   let area = lenght * breadth
   console.log(area);
}
areaRectangle(10, 20)
areaRectangle(15, 24)

const areaCircle = function(radius){
   let area = 3.14 * radius**2
   return area
}
const pack = areaCircle(25)
console.log(pack);
console.log(areaCircle(20));

const carry = function(){
   console.log('carry that bag of money');
}
carry()

const carryam = function(){
   let comment = 'carry that bag of money'
   return comment
}
talk = carryam()
console.log(talk);


// FUNCTION DIFF METHODS
// declaration (doesnt use const)
function wale(name) {
   console.log(`${name} na you i dey look oh`);
}
wale(wale)

// expression method
const wale1 = function(name){
   console.log(`${name} na you i dey look oh`);
}
wale1('dave')


// DATA TYPES

// primitives
// - strings
// - numbers
// - boolen
// - null 
// - undefined

// non primitives or complex
// - object
// - arrays

// comparison operators  [boolean]
// == loose comparison operator
// === strict comparison operator
// < less than
// > greater than
// <= less than or equal to
// >== greater than or equal to
// != not equal t0 [loose comparison]
// !== [strict comparison]

// FUNCTION

// function declaration 
// function name(params) {
   // console.log();
// }
// name()

// function expresion
// let name = function(params) {
//    console.log();
// }
// name()
// arrow function
// let party = (time, location)=>{
//    console.log(`the party is starting ${time} at ${location}`);
// }
// party('10am', 'Aso rock')
// party('12am', 'muse market')
// party('11pm', 'oniru beach')

// alert('hello')

// prompt('free')
// let userInput = prompt()
// console.log(userInput);


//  let userInput1 = Number(prompt('input a number'))
//  let operator = prompt('choose an operator, options are *, /,')
//  let userInput2 = Number(prompt('input another number'))

 // another method to covert strings to number
// let Input1 = Number(userInput1)
// let Input2 = Number(userInput2)
 
// function calculate(){
//    if (operator == '/') {
//       let value = userInput1 / userInput2
//       console.log(value);
//    }
//    else if(operator == '+') {
//       let value = userInput1 + userInput2
//       console.log(value);
//    }
//    else if(operator == '*'){
//       let value = userInput1 * userInput2
//       console.log(value);
//    }
//    else if(operator == '-'){
//       let value = userInput1 - userInput2
//       console.log(value);
//    }
//    else{
//       alert('Error!!!')
//    }
// }
// calculate()

// another method for the class work with switch case
let operate = 5
switch (operate) {
   case ' +' :
      let value = userInput1 + userInput2
      console.log(value);
      case '*':
      let value1 = userInput1 + userInput2
      console.log(value1);
      case '-':
      let value2 = userInput1 + userInput2
      console.log(value2);
      case '/':
      let value3 = userInput1 + userInput2
      console.log(value3);
      
      break;

   default:
      console.log('you have an error');
      break;
}

 

let numb = 9

// switch [another method for if,else if,else]
switch (numb) {
   case 8:
      console.log('you got 8');
      case 7:
         console.log('you got 7');
         case 9:
            console.log('you got 9');
            case 6:
               console.log('you got 6');
           
      
      break;

   default:
      console.log('youre out of option');
      break;
}

// to covert a string to a number 
// let name = Number(numb)

// to convert a number to a string
// let name = String(numb)

// to check type of
console.log(typeof(numb));


// slice method
let men = ['Turner', 'Smart-X', 'Demisage', 'Arowolo', 'Zeez']
console.log(men);
let part = men.slice(2, 4)
console.log(part);
console.log(men.length);

let men2 = [1, 2, 3, 4, 5, 6]

let men3 = men2.length;
console.log(men3);

// the lastindexof method returns the last index of occurence of a given substring in the string

let dray = 'Terminator'

let dray2 = 'm'

let result = dray.lastIndexOf(dray2)
console.log(result);

// let gre = 2349047445458

// let gre2 = gre.slice(4)
// console.log(gre2);

// if (userInput.slice(0, 4) == '+234') {
//    log
// }


let points = [40, 100, 1, 5, 25, 10];
console.log(points.sort());

const d = new Date();
console.log(d);

let d1 = new Map()
console.log(d1);