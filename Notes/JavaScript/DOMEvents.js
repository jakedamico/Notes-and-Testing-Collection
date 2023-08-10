//DOM Events
    //•Responding to events that users do on the DOM
    //•we want to "listen" for events

//Inline Events
    //•Events can be added directly in the html
    //•Not the best but possible

//The onclick and other Properties
    //•We can set properties to do certain actions by setting the properties equal to functions

button2 = document.querySelector('#button2');
button2.onclick = function() {
    alert('Alert!');
    alert('Double Alert!');
}

button2.onmouseenter = function() {
    console.log('You moused over button 2');
}

//addEventListener
    //•Another way for assigning action to events
    //•Cant have two callback functions for same event
        //•Get around this by using addEventListener()
    //•Can pass a third argument to the method to change options
        //•For example, passing {once: true} will only call the callback the first time
    //•Can also removeEventListener()

button3 = document.querySelector('#button3');

button3.addEventListener('dblclick', function() {
    alert('Nice double click');
});

//Events and the keyword this
    //•Whatever an event is done to, the keyword 'this' will be set to it

function colorize() {
    this.style.backgroundColor = 'red';
}
const h1 = document.querySelector('h1');
h1.addEventListener('click', colorize);

//Keyboard events and event objects
    //•can pass arguments to your callback function to capture events
    //•Has tons of info about the event that happened
    //•can also listen for different kinds of keyboard events
    //•Capturing a keydown event will contain the key in the event object
    //•event.key and event.code will have different values and can be used for different applications

document.querySelector('button').addEventListener('click', function (event) {
    console.log("take a look at this neat event data!");
    console.log(event);
});

const input = document.querySelector('input');
input.addEventListener('keydown', function (event) {
    console.log("keydown!");
    console.log(event);
    console.log(event.key);
    console.log(event.code);
});
input.addEventListener('keyup', function () {
    console.log("keyup!");
});

//Form Events and PreventDefault
    //•Can use 'submit' to catch when forms are submitted
    //•preventDefault() tells the user agent that its default action should not be taken

const testForm = document.querySelector('#testForm');
const loginButton = document.querySelector('#loginButton');

testForm.addEventListener('submit', function (event) {
    alert('logging in');
    event.preventDefault();
});

//input and change events
    //•Change events occur when you click off input after it has changed
    //•Input events are fired when the input is changed

input.addEventListener('change', function(event) {
    console.log(event);
})

//Event bubbling
    //•events will 'bubble' up from the lowest level to the highest
    //•For example, if there are nested onclick elements in the HTML, they will all call from the inside first
    //•Can use event.stopPropagation to stop this behavior

//Event Delegation
    //•The idea is to handle similar elements by selecting their common ancestor
    //•In the event handler we get event.target to see where the event actually happened