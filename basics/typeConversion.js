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
