//The DOM
    //•Stands for Document Object Model
        //•Javascript representation of a webpage
        //•"Window" into the contents of a webpage
        //•A bunch of objects you can interact with
    //•Objects are created from passed html and css
        //•Relationship trees are also created
    //•The document object is the entry point into the DOM
        //•Contains representations of all the content on a page and useful methods and properties
        //•Each item on a page is its own object inside of document

//getElementById
    //•Used to select or single out elements
    //•Pass string
    //•Can use console.dir to print an element as an object to view

    console.dir(document.getElementById('toc')); //•Printing the table of contents element

//getElementsByTagName and getElementsByClassName
    //•Returns multiple elements
    //•Returns an HTMLCollection
        //•HTMLCollection is a collection of element objects
    //•Not case sensitive
    //•Can manipulate DOM elements like the commented code below for an example
    //•If nothing is found, an empty HTMLCollection is returned

    var images = document.getElementsByTagName('img');
    console.dir(images);
    // for (let image of images) {
    //     image.src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg";
    // }

//querySelector and querySelectorAll
    //•Usually a better way, a newer JS addition
    //•Swiss army knife selector
    //•querySelector returns the first found, querySelectorAll returns all matching
    //•Returns NodeList of items

console.dir(document.querySelector('p'));
console.dir(document.querySelectorAll('p'))

//innerHTML, textContent, and innerText
    //•attributes on elements that hold the text displayed
    //•Can be edited like other JS objects
    //•textContent gets the content of all elements including <script> and <style>
    //•innerText only shows human readable elements
    //•innerHTML allows you to add and change HTML elements

//Attributes
    //•Elements have lots of different attributes and methods
    //•Can use getAttribute() and setAttribute to
    //•Now that we have the input variable, there are many things we can do to edit it

    const input = document.querySelector('input[type="text"]');
    input.type = 'color';
        
//Changing Styles
    //•One of the attributes is 'style' containing the styles for the item
    //•All in camel case
    //•Does not contain current styles but can be used to edit them
    //•Best practice is to define a css class and add or remove it
    //•Can use window.getComputedStyle(element) to get the current styles

    const heading = document.querySelector('h1');
    console.dir(heading.style);
    heading.style.border = '2px solid red';
    console.dir(window.getComputedStyle(heading));

//classList
    //•using the .purple and .border classes in the stylesheet
    //•issue with first 4 lines arises when we want to apply a second class
        //•using that same call will just replace the purple class
    //•can use the classList object, it has built in methods
        //•Returns a DOMTokenList
    //•Can use classList.toggle to toggle classes on or off

    const h2 = document.querySelector('h2');
    console.log(h2.getAttribute('class'));
    h2.setAttribute('class', 'purple');
    console.log(h2.getAttribute('class'));

    console.log(h2.classList);
    h2.classList.add('border');
    console.log(h2.classList);

    h2.classList.toggle('purple');
    console.log(h2.classList);

//Traversing Parent/Child/Sibling
    //•You can access the parent element of an element with .parentElement
        //•These can be chained together
    //•Can use .children to get all children of an element

    const firstBold = document.querySelector('b');
    console.dir(firstBold.parentElement);

//append, appendChild, remove, and removeChild
    //•We create new element with document.createElement()
    //•Once we have the created element, we use the append methods to add it to the page
    //•append is newer than appendChild and is more flexible