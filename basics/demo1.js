// console.log("Hello, World!");
// how to run this code ? we can use the node in termainal or put this file into index file and open in browser

//  ~/VSCodeProjects/chaiPerCode/Chapter1  node demo1.js                                                                                                                                         ✔  09:47:57 AM 
//    Hello, World!

const accountId = 12345;
let accountEmail='dearbhupi@yahoo.com';
var accountPassword='@12345';
accountCity='New York';

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

// const value will not chage but let and var can change the value
// please do not use var as it is old way to declare variable and it can create problem in 
// future as var can change the value without an scope and it can be accessed outside the block scope. 
// so please use let and const to declare variable  


// console.table({accountId, accountEmail, accountPassword, accountCity}); // this will print the data in table format but it will not print the value of variable as it will print the key and value pair. 

console.table([accountId, accountEmail, accountPassword, accountCity]); // this will print the data in table format and it will print the value of variable as it will print the key and value pair.    
/*

*** PLEASE VISIT THE https://tc39.es/ecma262/ FOR MORE INFORMATION ABOUT JAVASCRIPT AND ITS FEATURES ***SS
 ~/VSCodeProjects/chaiPerCode/Chapter1  main !1  node demo1.js                                                                            ✔  02:10:26 PM 

console.table({accountId, accountEmail, accountPassword, accountCity});
┌─────────────────┬───────────────────────┐
│ (index)         │ Values                │
├─────────────────┼───────────────────────┤
│ accountId       │ 12345                 │
│ accountEmail    │ 'dearbhupi@yahoo.com' │
│ accountPassword │ '@12345'              │
│ accountCity     │ 'New York'            │
└─────────────────┴───────────────────────┘

 ~/VSCodeProjects/chaiPerCode/Chapter1  main !1  node demo1.js                                                                            ✔  02:11:06 PM 
console.table([accountId, accountEmail, accountPassword, accountCity])
┌─────────┬───────────────────────┐
│ (index) │ Values                │
├─────────┼───────────────────────┤
│ 0       │ 12345                 │
│ 1       │ 'dearbhupi@yahoo.com' │
│ 2       │ '@12345'              │
│ 3       │ 'New York'            │
└─────────┴───────────────────────┘ 
*/

// let name = 'Bhupinder Singh';
// let age = 30;
// let isMarried = false;
// null => standalone value that represents nothing or no value
// undefined => standalone value that represents a variable that has not been assigned a value yet
// bigint => a primitive data type that can represent integers with arbitrary precision
// symbol => a primitive data type that can be used to create unique identifiers for objects
// example of symbol => const uniqueId = Symbol('id'); // this will create a unique identifier for the object
// object => a collection of key-value pairs that can be used to store and manipulate data
// example of object => const person = { name: 'Bhupinder Singh', age: 30, isMarried: false };


// console.log(name);
// console.log(age);
// console.log(isMarried);

// interview questsion => what is the difference between null and undefined ?
console.log(typeof null); // object
console.log(typeof undefined); // undefined

console.log(null == undefined); // true
console.log(null === undefined); // false

// interview question => what is the difference between == and === ?
console.log(1 == '1'); // true
console.log(1 === '1'); // false
