// FOR LOOP
for(let i=9; i<11; i++){
     console.log('This is loop', 1);
}
console.log('loop has finished');

const country = ['Ghana', 'America', 'Togo', 'chicago', 'france', 'korea', 'macao', 'spain', 'usa']

for(let i = 0; i < country.length; i++){
    console.log('this is a name of country', country[i]);
}


console.log(country[7]);

//classwork
const names = ['gabriel', 'fola', 'tola', 'sam', 'dave', 'fred', 'dele']
for(let k =2; k < names.length; k++){
    console.log('Strictly Marlians:', names[k]);
}

console.log(names[5]);

const person = document.querySelector('.names')
for (let index = 0; index < names.length; index++) {
    console.log('This person name is', names[index]);

    let output = '';
    output = `<h3>${ names[index]}</h3>`
    person.innerHTML += output
    
}

// WHILE LOOP
// initialization 
// while (ondition){
    // do something ( like to display on console or browser)
// }

let i =0
while(i < 8){
    console.log('in loop :', i);
    i++
}

const name = [
    'sunny', 'fawaz', 'qudus', 'emeka', 'naseer', 'wale', 'mama', 'sunday'
]

let a =0
while(a < name.length ){
    console.log('the name of this guy is:', name[a]);
    a++
}
