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
let numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);     
// for array we can also use the dot notation to access the array elements but it is not recommended because it is not a good practice. we can use the at() method to access the array elements.    
console.log(numbers.at(0));
console.log(numbers.at(1));
console.log(numbers.at(2));


// variable assignment and value copying IMPORTANT concept to understand
let a1 ="bhupinder";
let b1 = a1;
console.log("value of a1 = " + a1);
console.log("value of b1 = " + b1);
a1 = "John";
console.log("value of a1 is = " + a1);
console.log("value of b1 is = " + b1);
