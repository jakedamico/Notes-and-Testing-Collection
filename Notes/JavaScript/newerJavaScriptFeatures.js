//Default Parameters
    //•Used to have to check for undefined and assign manually
    //•Can assign defualt value with equal sign in parameters

function printName(name = 'default') {
    console.log(`Name is: ${name}`)
}

//Spread in JavaScript
    /*•Spread syntax allows an iterable such as an array to be expanded in places where zero or more
    arguments or elements are expected, or an object expression to be expanded in places where zero
    or more key-value pairs are expected*/
    //•'Spreading' an iterable into separate elements
    //•Adding the '...' syntax will spread an array
    //•Can also spread strings as they are iterable, console.log adds a space between each argument

const nums = [1, 2, 3, 4];
console.log(Math.max(nums)); //Will not work as max() expects numbers
console.log(Math.max(...nums));//Spread array
console.log('hello');
console.log(...'hello');

    //•Can also spread to form new arrays and do other actions on array literals
const nums2 = [5, 6, 7];
const numsCombined = [...nums, ...nums2];
console.log(`Combined arrays: ${numsCombined}`);

//Rest Parameters
    //•Looks like spread but not
    //•The arguments object is available inside every function
        //•Is an array-like object
        //•Has length property
        //•Does not have array methods like push/pop
        //•Contains all the arguments passed to the function
        //•Not available inside arrow functions
    //•Can use ... syntax to collect all of the arguments in an array
    //•Collect the "rest" of the values

function sum(...nums){
    return nums.reduce((total, element) => total + element);
}

//Destructuring Arrays and objects
    //•Syntax improvement
    //Can also use default arguments with these

const scores = [42089, 42830, 3945, 4398, 24983];
const score1 = scores[0];

const [one, two] = scores; //•This creates two new variables, one and two

const person = {
    name: 'Jake',
    email: 'jakedamico34@gmail.com'
}
const email = person.email;
const { email: emailDestructured, name: nameDestructured = 'defaultNames' } = person;
