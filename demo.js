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

console.log(letVar); // "I am a let variable"
console.log(constVar);// "I am a const variable"
console.log(varVar);// "I am a var variable"

// let and const are block scoped and var is function scoped.   

{
    let blockLet = "I am a block scoped let variable";
    console.log(blockLet); // "I am a block scoped let variable"
    let blockConst = "I am a block scoped const variable";
    console.log(blockConst); // "I am a block scoped const variable"
    var blockVar = "I am a block scoped var variable";
    console.log(blockVar);  // "I am a block scoped var variable"


}

//console.log(blockLet); // ReferenceError: blockLet is not defined
console.log("accessing the blocked outside the block", blockVar); // "I am a block scoped var variable" because var is function scoped and not block scoped. so it can be accessed outside the block. but let and const are block scoped so they cannot be accessed outside the block.


// function scoped var variable AKA lexical scoping
function testVar() {
    let functionVar = "I am a function scoped var variable";
    console.log(functionVar);// "I am a function scoped var variable"
}

testVar();
//console.log(functionVar); // ReferenceError: functionVar is not defined because functionVar is function scoped and cannot be accessed outside the function.


function addNumbers(a, b) {
    return a + b;
}

console.log("Sum of 5 and 10 is: " + addNumbers(5, 10));
console.log(addNumbers);

let addNumbers2 = function(a, b) {
    return a + b;
};

console.log("Sum of 15 and 20 is: " + addNumbers2(15, 20));
console.log(addNumbers2);


// higher order function : when a function  is passed as an argument to another function

let sum = function(a, b) {
    return a + b;
};

let diff = function(a, b) {
    return a - b;
};

let multiply = function(a, b) {
    return a * b;
};

let divide = function(a, b) {
    return a / b;
};

function calculate(a, b, operation) {
    return operation(a, b);
}

console.log("Sum of 5 and 10 is: " + calculate(5, 10, sum));
console.log("Difference of 15 and 5 is: " + calculate(15, 5, diff));
console.log("Product of 5 and 10 is: " + calculate(5, 10, multiply));
console.log("Division of 20 by 4 is: " + calculate(20, 4, divide));

// arrow function and higher order function
const addArrow = (a, b) => a + b;
const subtractArrow = (a, b) => a - b;

function calculateArrow(a, b, operation) {
    return operation(a, b);
}

console.log("Sum of 5 and 10 is: " + calculateArrow(5, 10, addArrow));
console.log("Difference of 15 and 5 is: " + calculateArrow(15, 5, subtractArrow));


// closure : when a function is defined inside another function and the inner function has access to the outer function's variables even after the outer function has returned.

function outer(){
    function inner(){
        console.log("I am the inner function");
    }
    return inner;
}
let result = outer();
console.log(result); // [Function: inner]
result(); // "I am the inner function"

function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log("Outer Variable: " + outerVariable);
        console.log("Inner Variable: " + innerVariable);
    };
}

const newFunction = outerFunction("outside");
newFunction("inside");

// another example of closure

function makeCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

function cookieJar() {
    let cookies = 10;
    return  function takeCookies() {
        cookies--;
        return cookies;
    };
}   

const myCookieJar = cookieJar();
console.log(myCookieJar());
console.log(myCookieJar());
console.log(myCookieJar());


let aa = 10;
function outerFunction2() {
    let bb = 20;
    function innerFunction2() {
        let cc = 30;
        console.log(aa + bb + cc); // 60
    }
    innerFunction2();
}

let result2 = outerFunction2();
console.log(result2); // undefined because the outer function does not return anything. but the inner function has access to the outer function's variables even after the outer function has returned. this is called closure.
aa = 100;
bb = 200;
cc = 300;
console.log(outerFunction2());
//result2(); // 60 because the inner function has access to the outer function's variables even after the outer function has returned. this is called closure. 
console.log(aa + bb + cc); // 600 because the variables aa, bb, and cc are in the global scope and can be accessed from anywhere in the code.

// how to handle asynchronous code in JavaScript using callbacks, promises, and async/await

// callback function
function fetchData(callback) {
    setTimeout(() => {
        const data = "Data fetched from server using callback";
        callback(data);
    }, 10000);
}

fetchData((data) => {
    console.log(data); // "Data fetched from server"
});

function fetchDataWithError(callback) {
    setTimeout(() => {
        const error = "Error fetching data from server";
        callback(null, error);
    }, 1000);
}

function handleData(data, error) {
    if (error) {
        console.error(error);
    } else {
        console.log(data);
    }
}

fetchDataWithError(handleData);
  

// issues with callback functions is that they can lead to callback hell and make the code hard to read and maintain. To solve this problem, we can use promises and async/await.

asyncOperation1(arg1, (result1) => {
    asyncOperation2(result1, (result2) => {
        asyncOperation3(result2, (result3) => {
            asyncOperation4(result3, (result4) => {
            // do something with result1, result2, and result3
            });
        });
    });
});
    // the above code is an example of callback hell. it is hard to read and maintain. To solve this problem, we can use promises and async/await.
    // also know as pyramid of doom because of the indentation.
    // to solve this problem, we can use promises and async/await.

// promise
// a promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. A promise can be in one of three states: pending, fulfilled, or rejected.
// a promise is a placeholder for a value that will be available in the future. A promise can be created using the Promise constructor and it takes a function as an argument. The function takes two arguments: resolve and reject. The resolve function is called when the asynchronous operation is successful and the reject function is called when the asynchronous operation fails.
// a promise can be consumed using the then() and catch() methods. The then() method is called when the promise is fulfilled and the catch() method is called when the promise is rejected.
// a promise can also be consumed using the async/await syntax. The async keyword is used to declare a function as asynchronous and the await keyword is used to wait for a promise to be fulfilled or rejected.
// async/await is a syntactic sugar over promises. It makes the asynchronous code look like synchronous code and makes it easier to read and maintain.
// example of promise
function fetchDataPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = "Data fetched from server using promise";
            resolve(data);
        }, 2000);
    });
}

fetchDataPromise()
    .then((data) => {
        console.log(data); // "Data fetched from server"
    })
    .catch((error) => {
        console.error(error);
    });

// async/await
async function fetchDataAsync() {
    try {
        const data = await fetchDataPromise();
        console.log(data); // "Data fetched from server"
    } catch (error) {
        console.error(error);
    }
}

fetchDataAsync();   