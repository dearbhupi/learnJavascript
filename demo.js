console.log("Hello, World!");
console.log("This is a demo JavaScript file.");
console.log(4354+3424);

// primitive data types
let x= 10; // number
let y= "Hello"; // string
let z= true; // boolean
let a= null; // null
let b; // undefined

console.log(x);
console.log(y);
console.log(z);
console.log(a);
console.log(b);

// object data type
let person = {
    name: "John",
    age: 30,
    isStudent: false
};

console.log(person.name);
console.log(person.age);
console.log(person.isStudent);
// the above method of accessing the object properties is called dot notation. we can also access the object properties using bracket notation.
console.log(person["name"]);
console.log(person["age"]);
console.log(person["isStudent"]);

// array data type
// for array we can also use the dot notation to access the array elements but it is not recommended because it is not a good practice. we can use the at() method to access the array elements.    
let numbers = [1, 2, 3, 4, 5];
// if data type is same then it will return array
console.log("the type of numbers is: ", typeof(numbers));
console.log(numbers.at(0));
console.log(numbers.at(1));
console.log(numbers.at(2));


let arr = ["1", 2, null, true, undefined, {name: "John", age: 30}, [1, 2, 3]];
console.log("the type of arr is: ", typeof(arr)); // if the data type is different then it will return object 
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);     
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5].name);   
console.log(arr[5].age);




// variable assignment and value copying IMPORTANT concept to understand
let a1 ="bhupinder";
let b1 = a1;
console.log("value of a1 = " + a1);
console.log("value of b1 = " + b1);
a1 = "John";
console.log("value of a1 is = " + a1);
console.log("value of b1 is = " + b1);



// functions declaration and calling

greet("Bob");
// you can called the function before it is declared because of hoisting in JavaScript. but it is not a good practice to do so. it is better to declare the function before calling it.

function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("Alice");


// arrow function
const add = (a, b) => {
    return a + b;
};

console.log("Sum of 5 and 3 is: " + add(5, 3));

console.log("Hosting variable value is " + hostingVar); // undefined
var hostingVar = "I am a hoisted variable";

console.log(hostingVar); // "I am a hoisted variable"

// this and window object

console.log(this); // window object
//console.log(window); // window object

function showThis() {
    console.log(this); // window object
}

showThis();

const obj = {
    name: "John",
    showThis: function() {
        console.log(this); // obj
    }
};

obj.showThis();

const arrowFunc = () => {
    console.log(this); // window object
};

arrowFunc();

let name = "John";
function showName() {
    console.log(this.name); // undefined
}

showName();

const obj2 = {
    name: "Alice",
    showName: function() {
        console.log(this.name); // "Alice"
        //console.log(window.name); // "John"
    }
};

obj2.showName();

const arrowFunc2 = () => {
    console.log(this.name); // undefined
     //console.log(window.name); // "John"
};

arrowFunc2();

// let, const, and var

console.log("Demonstrating let, const, and var");
console.log("let and const are block scoped and var is function scoped.");
console.log("let and const cannot be redeclared in the same scope but var can be redeclared.");
console.log("let and const cannot be reassigned but var can be reassigned.");



//console.log(letvar); // ReferenceError: Cannot access 'letVar' before initialization    
//console.log(constVar); // ReferenceError: Cannot access 'constVar' before initialization
console.log(varVar); // undefined

let letVar = "I am a let variable";
const constVar = "I am a const variable";   
var varVar = "I am a var variable";

console.log(letVar);
console.log(constVar);
console.log(varVar);

// let and const are block scoped and var is function scoped.   

{
    let blockLet = "I am a block scoped let variable";
    console.log(blockLet);
    let blockConst = "I am a block scoped const variable";
    console.log(blockConst);
    var blockVar = "I am a block scoped var variable";
    console.log(blockVar);


}

//console.log(blockLet); // ReferenceError: blockLet is not defined
console.log("accessing the blocked outside the block", blockVar); // "I am a block scoped var variable" because var is function scoped and not block scoped. so it can be accessed outside the block. but let and const are block scoped so they cannot be accessed outside the block.

function testVar() {
    var functionVar = "I am a function scoped var variable";
    console.log(functionVar);
}

testVar();
//console.log(functionVar); // ReferenceError: functionVar is not defined because functionVar is function scoped and cannot be accessed outside the function.