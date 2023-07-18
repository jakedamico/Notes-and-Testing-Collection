//Function Scope
    //•Refers to variable visibility
    //•Running collectEggs2 and then trying to print totalEggs to the console will not work
        //•This is because totalEggs is scoped to the function with the let keyword
    //•If a variable is defined with the same name as a variable outside of the functions scope, the variable
    //inside the function scope will be used.

function collectEggs() {
    let totalEggs = 10;
    console.log(`Total eggs are: ${totalEggs}`);
}

function collectEggs2() {
    let totalEggs = 10;
}
//console.log(totalEggs);


//Block Scope
    //•A 'block' is code inside {} except for a function
    //•In this code, PI is scoped to the block and will throw an error when trying to log it.

let radius = 8;
if (radius > 0) {
    const PI = Math.PI;
}

console.log(radius);
console.log(PI);

    //•However in this code, PI is declared with 'var' and therefore not scoped to the block.

let radius2 = 8;
if (radius2 > 0) {
    var PI = Math.PI;
}

console.log(radius);
console.log(PI);

//Lexical Scope
    //•Executing outerFunction() only will produce no output as innerFunction as never actually executed
    //•Calling innerFunction() will produce the output from said function
    //•innerFunction will have access to the array defined in outerFunction

function outerFunction() {
    const array = [1, 2, 3, 4, 5];
    function innerFunction() {
        for(let arrayNum of array) {
            console.log(`Array number: ${arrayNum}`);
        }
    }
    innerFunction();
}

//Function Expressions
    //•add() is a 'Function Statement' defined using the function keyword
    //•square() is a 'Function Expression'
        //•Technically storing a function with no name in the square variable
        //•Anonymous functions are created here, they run as soon as they are defined.
    //•Functions are values in JS, they can be stored passed called etc.

function add(x, y) {
    return x + y;
}

const square = function(num) { 
    return num * num;
}

//Higher Order Functions
    //•Can accept other functions as arguments
    //•Can also return a function
    //•We don't use '()' when trying to pass a function as argument
        //•This is because '()' executes the function, we want to pass a reference.

function callTwice(functionToCall) {
    functionToCall();
    functionToCall();
}

callTwice(collectEggs);

//Higher Order Functions- Returning a Function
    //•If createMysteryFunction is called, no action will happen as the function is being returned
    //•Need to capture the value of the function, and then it can be called.

function createMysteryFunction() {
    const rand = Math.random();
    if (rand > 0.5) {
        return function() {
            console.log('Winner!');
        }
    } else {
        return function() {
            console.log('Loser!');
        }
    }
}

const createdFunction = createMysteryFunction();
createdFunction();