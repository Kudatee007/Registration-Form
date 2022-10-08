// // 1. replace david in the above array with tola

// let students = ["charles", "timmy", "sgreen", "fawaaz", "naseer", "david"];
// // let newStudents = students.splice(5, 1, 'tola')
// // console.log(students);
// // console.log(newStudents);




// // 2. using a do while loop, loop through the above array and log each item to the console excluding charles and sgreen

// let i = 0
// // do {
// //     if(students[i] == 'sgreen'){
// //         i++
// //         continue
// //     }else if(students[i] == 'charles'){
// //         i++
// //         continue
// //     }
// //     else{
// //         console.log(students[i])
// //         i++
// //     }
// // } while (i < students.length);

// // method 2
// do{
//     if(students[i] == 'charles' || students[i] == 'sgreen') {
//         i++
//         continue
//     }else {
//         console.log(students[i]);
//         i++
//     }

// }while(i < students.length)


// const data = [
//   { name: "david", occupation: "Snr developer", age: 50 },
//   { name: "tola", occupation: " Junior developer", age: 70 },
//   { name: "fawaaz", occupation: "Junior developer", age: 32 },
//   { name: "naseer", occupation: "Junior developer", age: 44 },
//   { name: "rhema", occupation: "Snr developer", age: 41 },
//   { name: "timmy", occupation: "Junior developer", age: 24 },
//   { name: "banti", occupation: "Junor developer", age: 90 },
// ];


// // 3. using a while loop, loop through the above data and list out thier name
// let io = 0
// while (io < data.length) {
//     console.log(data[io].name);
//     io++
// }

// // 4. using the forEeach method, loop through the above array and console log only the Snr Developers 


// //DONE
//       data.forEach(function(data) {
//         if (data.occupation == 'Snr developer') {
//             console.log(data);
//         }
//       })

// // 5. using a for loop, loop through the above array and only show the names and occupations of developers above 40 years 

// //DONE
// let ii = 0
// for (let ii = 0; ii < data.length; ii++) {
//     // const element = array[index];
//     if (data[ii].age > 40) {
//         console.log(data[ii].name);
//         console.log(data[ii].occupation);

//     }
    
// }

// Read up on the filter method, it is an array method and similar to the forEach and Map method, it is a higher order function 

// Read up on the ternary operator

// Introduction To The DOM = document object  model

// 5 Ways of getting an element from an html document

// document.getElementById()
// document.getElemntByClassName()
// document.getElementByTagName()
// document.querySelector()
// document.querySelectorAll()

// let java1 = document.getElementById('java')

// console.log(java1);

// java.textContent = 'javascript advanced'


//////////////////

let students = ["charles", "timmy", "sgreen", "fawaaz", "naseer", "david"];

// 1. replace david in the above array with tola
  students[5] = 'tola'
  console.log(students);

// 2. using a do while loop, loop through the above array and log each item to the console excluding charles and sgreen

let i = 0

do {
    if (students[i] === 'charles' || students[i] === 'sgreen' ) {
        i++
        continue
        
    }else{
        console.log(students[i]);
        i++
    }
    
} while (i < students.length);

const data = [
  { name: "david", occupation: "Snr developer", age: 50 },
  { name: "tola", occupation: " Junior developer", age: 70 },
  { name: "fawaaz", occupation: "Junior developer", age: 32 },
  { name: "naseer", occupation: "Junior developer", age: 44 },
  { name: "rhema", occupation: "Snr developer", age: 41 },
  { name: "timmy", occupation: "Junior developer", age: 24 },
  { name: "banti", occupation: "Junor developer", age: 90 },
];


// 3. using a while loop, loop through the above data and list out thier name
let io = 0
while (io < data.length) {
    console.log(data[io].name);
    io++
    
}

// 4. using the forEeach method, loop through the above array and console log only the Snr Developers 

let arr1 = data.forEach(function(data){
    if (data.occupation == 'Snr developer') {
        console.log(data);
    }
})


// 5. using a for loop, loop through the above array and only show the names and occupations of developers above 40 years 
for (let ios = 0; ios < data.length; ios++) {
    if (data[ios].age > 40) {
        console.log(data[ios].name, data[ios].occupation);
    }
    
}

// Read up on the filter method, it is an array method and similar to the forEach and Map method, it is a higher order function 

// Read up on the ternary operator