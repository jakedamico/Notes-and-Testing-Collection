//The forEach Method
    //•Does an action to every element of an array
    //•Most of the time the function will be defined implicitly in the forEach call

const numbersArray = [1, 2, 3, 4, 5];

function print(element) {
    console.log(element)
}
//numbersArray.forEach(print);
numbersArray.forEach(function (element) {
    console.log(element)
});

//The map Method
    /*•Similar to forEach, except it instead generates a new array using the return
    value of the callback*/
    //•Map an array from one state to another

const mappedNumbersArray = numbersArray.map(function(num) {
    return num * 2;
});
console.log(mappedNumbersArray);
console.log(numbersArray);

//Arrow Functions
    //•Newer syntax, no IE support
    //•very useful for array methods
    //•Used to create function expressions, cant exist on their own
    //•(parameter) => { codeToExecute }

const add = (x, y) => {
    return x + y;
};
add(1, 2);

//Implicit Returns
    //•In certain situations, the return keyword can be left off to clean code
    //•Replace {} with () for longer statements
    //•Can also remove () completely

const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1;
}
const rollDieImplicit = () => (
    Math.floor(Math.random() * 6) + 1
)
const addImplicit = (a, b) => a + b

//setTimeout and setInterval
    //•setTimeout used to delay execution of a function
        //•Second argument is number of milliseconds to delay
    //setInterval will call the callback function every number of milliseconds

setTimeout(() => {
    console.log("This is delayed!")
}, 3000);

//The filter Method
    //•Creates a new array with the same elements that match a condition
    //•Does not change the object it's called on
    //•Very common to combine methods

const oddNumbersArray = numbersArray.filter((num) => {
    return num % 2 != 0;
})

//some and every Methods
    //•Boolean methods, return true or false
    //•Used to test arrays for some property

console.log(numbersArray.some(num => num > 3));
console.log(numbersArray.every(num => num > 3));

//The Reduce Method
    //•Executes a reducer function on each element resulting in a single value
    //•Reducer function has two parameters
        //•First parameter is accumulator, thing we are reducing down to
        //•Second parameter is current value from array

console.log(numbersArray.reduce((accumulator, currentVal) => {
    return accumulator + currentVal;
}))

//Arrow Functions and the this Keyword
    //•The this keyword works differently in arrow functions, it ends up refering to the scope it was created in

const person = {
    firstName:"Jake",
    lastName:"D'Amico",
    fullName: function() {
        return `${this.firstName} ${this.lastName}`
    },
    fullNameArrow: () => {
        return `${this.firstName} ${this.lastName}`
    }
}
console.log(person.fullName());
console.log(person.fullNameArrow());
