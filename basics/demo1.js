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


// Question JS is dynamic or static language ? 
/*JavaScript is a dynamically typed language.

This means you do not have to explicitly declare a variable's data type before using it, and a single 
variable can hold different types of values (such as strings, numbers, or arrays) during its lifetime.
 The type is determined at runtime based on the value assigned to the variable.

For example, this is perfectly valid in JavaScript:

JavaScript
let myVariable = "Hello"; // myVariable is currently a string
myVariable = 42;          // myVariable is now a number

whereas in TypeScipt we specifically mentioend the type of the varialble

let myVariable:string = "Hello"; // myVariable is currently a string
myVariable = 42;          // myVariable can not be a number


In a statically typed language (like Java, C++, or TypeScript), you must declare the type upfront, 
and assigning a number to a variable originally declared as a string would result in an error.'*/
// Datatype 
/* 
Primitive datatype
1. String
2. Number
3. boolean
4. null
5. undefined
6. Symbol
7. BigInt

Reference ( Non primitive data type)
1. Array
2. Objects
3. Functions
*/

const scope = 33
console.log(scope)
console.log(typeof scope) // number

// let convertedToString = String(scope)
// console.log(convertedToString)
// console.log(typeof convertedToString) // string

// let convertedToBoolean = Boolean(scope)
// console.log(convertedToBoolean)
// console.log(typeof convertedToBoolean) // boolean

// let convertedToNumber = Number(scope)
// console.log(convertedToNumber)
// console.log(typeof convertedToNumber) // number 


// now interview qeustion
const str = '33aa'
console.log(str)
console.log(typeof str) // string

let convertedToString = String(str)
console.log(convertedToString)
console.log(typeof convertedToString) // string

let convertedToBoolean = Boolean(str)
console.log(convertedToBoolean)
console.log(typeof convertedToBoolean) // boolean

let convertedToNumber = Number(str)
console.log(convertedToNumber)
console.log(typeof convertedToNumber) // number

// notes when we convert a string to a number using the Number() function, if the string contains any non-numeric characters, the conversion will result in NaN (Not a Number). In this case, since the string '33aa' contains non-numeric characters, the conversion to number will result in NaN.
// "33"   =>(convert to Number)=> Number => value is  33 
// "33aa" =>(convert to Number)=> Number => value is NaN
// true =>(convert to Number)=> Number => value is 1
// false =>(convert to Number)=> Number => value is 0
// null =>(convert to Number)=> Number => value is 0
// undefined =>(convert to Number)=> Number => value is NaN
// NaN =>(convert to Number)=> Number => value is NaN




// interview questsion => what is the difference between null and undefined ?
console.log(typeof null); // object
console.log(typeof undefined); // undefined

console.log(null == undefined); // true
console.log(null === undefined); // false

// interview question => what is the difference between == and === ?
console.log(1 == '1'); // true
console.log(1 === '1'); // false

// https://tc39.es/ecma262/#sec-ecmascript-data-types-and-values


let value = 3
let negValue = -value
console.log(value) // 3
console.log(negValue) // -3

let strValue = '3'
let negStrValue = -strValue
console.log(strValue) // '3'
console.log(negStrValue) // -3

let boolValue = true
let negBoolValue = -boolValue
console.log(boolValue) // true
console.log(negBoolValue) // -1

let nullValue = null
let negNullValue = -nullValue
console.log(nullValue) // null
console.log(negNullValue) // 0

let undefinedValue = undefined
let negUndefinedValue = -undefinedValue
console.log(undefinedValue) // undefined
console.log(negUndefinedValue) // NaN



console.log(2+2) // 4
console.log(2-2) // 0
console.log(2*2) // 4
console.log(2/2) // 1
console.log(2%2) // 0
console.log(2**2) // 4  

let str1 = 'Hello'
let str2 = 'World'
console.log(str1 + ' ' + str2) // Hello World
console.log(str1 + str2) // HelloWorld
console.log(str1 + 2) // Hello2
console.log(2 + str1) // 2Hello
console.log(str1 + true) // Hellotrue
console.log(true + str1) // trueHello       
console.log(str1 + null) // Hellonull
console.log(str1 + undefined) // Helloundefined

console.log('1'+ 1);
console.log(2+'2');
console.log(2 + 2 + '2') // 42
console.log('2' + 2 + 2) // 222
console.log('2' + (2 + 2)) // 24    



// more to study https://developer.mozilla.org/en-US/docs/Web/API/console/log_static


// difference between == and ===
// === is the strict check whereas == just check teh value

console.log('2'== 2) // true
console.log('2'=== 2) // false

console.log(null > 0); // false as here the value of null is assumed to be 0
console.log(null == 0); // false
console.log(null >=0); // true


console.log(undefined < 0); // false
console.log(undefined == 0); // false
console.log(undefined >=0); // false


let id = Symbol(123);
let secondId = Symbol(123)

console.log("id===secondId :",id===secondId);
console.log('id==secondId : ', id==secondId)
console.log(id)
console.log(secondId)