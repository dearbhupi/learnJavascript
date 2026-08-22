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
