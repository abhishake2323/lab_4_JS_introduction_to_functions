function greet(name) {
    if (name === undefined) { 
     return "Hello, World";
    }
     
    return "Hello, " + name;
}
let greeting = greet("Jason");
console.log("Greeting with function greet() with 'Jason' as parameter : " + greeting);

function addNumbers(num1, num2) {
    let res = num1 + num2;
    return res
}
let res = addNumbers(76, 24);
console.log("Adding numbers using function addNumbers with parameters 76 and 24 is : " + res);

let x = 10;
console.log("Value of x is :" + x);
function changeValue() {
    console.log("called changeValue function");
    let localx = 11;
    x = localx;
    return x;
}


console.log("Value changed to :" + changeValue());
function outerFunction() {
    console.log("called outerfunction");
    let count = 0;
    console.log("Count is :" + count);
    return function () {
        console.log("called inner function");
        count = count + 10;
        return count;
    }
}

let fvar = outerFunction();

console.log("updated count: " + fvar());
console.log("updated count: " + fvar());
console.log("updated count: " + fvar());
