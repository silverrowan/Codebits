---
tags:
  - JavaScript
  - DOM
---
## What is the DOM?
- Document Object Model (DOM) is a tree-like representation of the contents of a webpage.
    - a tree of "nodes" with different relationships depending on how they're arranged in the HTML document.
    - There are many types of nodes - most of which aren't used!
        - We'll be focusing on element nodes (for now #later-lesson )
        - Element nodes are primarily used for manipulating the DOM.
## Node Relationships
```HTML title:"Element Relationship Types Example"
<div id="container">
    <div class = "display"></div>
    <div class = "controls"></div>
</div>
```
- in this example:
    - `div.display` and `div.controls` are ~={green}siblings=~
    - `div.container` is a ~={green}parent=~ to `div.display` and `div.controls`
        - `div.display` and `div.controls` are ~={green}children=~ of `div.container`
## Targeting nodes
- use 'selectors' to target nodes you want to work with
    - you can use a combination of CSS-style selectors and relationship properties to target which node you want.
### CSS-style selectors
- in example, to refer to  `<div class = "display"></div>` you could use:
    - div.display
    - .display
    - \#container > .display
    - div#container > div.display
- You can also use relational selectors with special properties owned by the nodes.
    - eg. `firstElementChild` or `lastElementChild` or `previousElementSibling`
```HTML title:"Element Relationship Types Example"
<div id="container">
    <div class = "display"></div>
    <div class = "controls"></div>
</div>
```
```js title:"example targeting"
     // selects the #container div 
     // (don't worry about the syntax, we'll get there)
const container = document.querySelector("#container");

    // selects the first child of #container => .display
const display = container.firstElementChild;
console.log(display);  // <div class="display"></div>

    // selects the .controls div
const controls = document.querySelector(".controls");

    // selects the prior sibling => .display
const display = controls.previousElementSibling;
console.log(display); // <div class="display"></div>
```

## DOM Methods
- When HTML is parsed by a web browser it is converted to the DOM
    - These nodes are JavaScript objects that have *many* properties and methods attached to them.
    - These properties are the primary tools we are going to use to manipulate the webpage with JavaScript
### Select existing element (in DOM) - Query Selectors
- `element.querySelector(selector)` - returns a reference to the *first* match of selector
- `element.querySelectorAll(selectors) `- returns a **"NodeList"** containing references to *all* of the matches of the selectors.
    - This **"NodeList"** is NOT an array!
    - several array methods are missing from NodeLists.
        - if this causes problems, can convert the NodeList to an array using `Array.from()` or the [[Spread Operator]]
```js title:examples
const item1 = document.querySelector('#id') //or (first element) by class, or 
const item2 = document.querySelectorAll('p') //or (all) by html tag
const btn = document.querySelector("button") //first one only
const buttons = document.querySelectorAll("button")//all buttons
```
- There are several other (more specific) queries, that offer potential/marginal performance benefits. #later-lesson 
- Select existing element (in DOM) & assign to variable
### Element Creation
- `document.createElement(tagName, [options])` - creates a new element of tag type tagName.
    - eg`const div = document.createElement("div");
    - [options] in this case means there are some optional parameters.
    - This function **DOES NOT** put the new element into the DOM.
        - it is created in memory
        - this is so you can manipulate the element before placing it
            - eg. adding styles, classes, ids, text, etc
```js 
//Create a new element in DOM
const newItem = document.createElement('div') // html tag needed
    //give it a class
    newItem.classList.add("className")
    //give it some content (as text)
    newItem.textContent = "text"
    //give it some css style
    newItem.style.color = "green"
    newItem.style.border = "1px, solid, blue"
    newItem.style.backgroundColor = "grey" //NOTE diff from css name! dash replaced w camelCase.
    
//put it in the document as last child of element "item1"
item1.appendChild(newItem);    
```    

### Element Placing
#### Append elements
- `parentNode.appendChild(childNode)` - appends *childNode* as the ~={cyan}last child=~ of *parentNode*
- `parentNode.insertBefore(newNode, referenceNode)` - inserts *newNode* into *parentNode* before *referenceNode*
#### Remove elements
- `parentNode.removeChild(child)` - removes child from parentNode on the DOM and returns a reference to child.
#### Altering Elements
- once you have a reference to an element, you can use that reference to alter the element's properties.
```js title:"Adding inline style"
// creates a new div referenced in the variable 'div'
const div = document.createElement("div");

// adds the indicated style rule to the element in the div variable
div.style.color = "blue";

// adds several style rules
div.style.cssText = "color: blue; background: white;";

// adds several style rules
div.setAttribute("style", "color: blue; background: white;");
```
- when accessing kebab-cased CSS, like `background-color` with JS, you will need to either use camelCase with dot notation, or bracket notion.
    - when using bracket notation, you can use either camelCase or kebab-case, but the property name must be a string
```js title:"working with kebab-case properties"
// dot notation with kebab case: doesn't work as it attempts to subtract color from div.style.background
// equivalent to: div.style.background - color
div.style.background-color;

// dot notation with camelCase: works, accesses the div's background-color style
div.style.backgroundColor;

// bracket notation with kebab-case: also works
div.style["background-color"];

// bracket notation with camelCase: also works
div.style["backgroundColor"];
```
#### Editing Attributes
```js title:ex
// if id exists, update it to 'theDiv', else create an id with value "theDiv"
div.setAttribute("id", "theDiv");

// returns value of specified attribute, in this case "theDiv"
div.getAttribute("id");

// removes specified attribute
div.removeAttribute("id");
```
- MDN section on HTML Attributes: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
#### Working with Classes
```js 
// adds class "new" to your new div
div.classList.add("new");

// removes "new" class from div
div.classList.remove("new");

// if div doesn't have class "active" then add it, or if it does, then remove it
div.classList.toggle("active");
```
- It is often standard (and cleaner) to toggle a CSS style rather than adding and removing inline CSS.
#### Adding Content
```js title:"text content"
// creates a text node containing "Hello World!" and inserts it in div
div.textContent = "Hello World!";
```

```js title:"HTML content"
// renders the HTML inside div
div.innerHTML = "<span>Hello World!</span>";
```
- **AVOID** innerHTML! Security risks. https://youtube.com/watch?v=ns1LX6mEvyM
    - better to use textContent where possible
- NOTE : adding content with JS can't be read by search engines!
### Creating & Appending DOM Element
```html
<body>
  <h1>THE TITLE OF YOUR WEBPAGE</h1>
  <div id="container"></div>
</body>
```
```js 
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);
```
- In the JavaScript file we get a reference to the *container div* that already exists
- Then we create a **new** div and store it in the *variable content*
- Then we add a class & text to the content div
- Finally we append that div to container.
- After the JavaScript is run, our DOM tree will look like this:
```html title:"DOM tree after above actions"
<!-- The DOM -->
<body>
  <h1>THE TITLE OF YOUR WEBPAGE</h1>
  <div id="container">
    <div class="content">This is the glorious text-content!</div>
  </div>
</body>

```
- remember the JavaScript does NOT alter your HTML, but the DOM.
## JavaScript Timing
- for the most part your JavaScript is run whenever the JS file is run, or when the script tag in the HTML is encountered.
- if you are including your JavaScript at the top of your file, MANY of these DOM methods will NOT work, because the JS code is running BEFORE the nodes are made in the DOM.
    - simplest way to fix this is to include your JavaScript at the bottom of the HTML file.
    - alternatively, you can link in the head of your HTML document, and add the keyword `defer` to load the file *after* the HTML is parsed
```html
<head>
<script src="js-file.js" defer></script>
</head>
```
- more on the defer attribute for script tags: https://javascript.info/script-async-defer#defer

[[Event Listeners]]

## Moving and Removing Nodes
- you can move an element exactly like you would place a new one
    - because the variable name is a reference to one and only one node, place it in a new location moves it from the old one.
- To remove an element...
    - when you have parent and self references:
        - `parentNodeName.removeChild(childNodeName)
    - when you only have self reference:
        - `selfNodeName.remove()
            - NOT supported in older browsers
        - `selfNodeName.parentNode.removeChild(selfNodeName)
          eg: `linkPara.parentNode.removeChild(linkPara)
## Manipulating Styles
- possible to manipulate CSS via Javascript in many ways.
- Get a list of all the stylesheets attached to a page with Document.styleSheets
    - returns an array-like obj w CSSStyleSheet objects
    - you can then add and remove styles as wished
        - buuuuuut this is an old way of doing it. easier ways now.
- First way is to add inline styles directly oneo elements you want to dynamically style with the `HTMLElement.style` property
                - less setup, good for simple uses
    - contains inline styling information for ea element in the document.
    - you can set its properties to directly update element styles.
        - eg.
            - para.style.color = "white";
            - para.style.backgroundColor = "black";
            - para.style.padding = "10px";
            - para.style.width = "250px";
            - para.style.textAlign = "center";
- Another common way to dynamically manipulate styles on your document
- write the styles in a separate stylesheet, and reference those styles by adding/removing a class name.
                - more purist - no mixing CSS & JS, no inline styles (seen as bad practice). better for more complex uses/applications.
    - add class to item: `nodeName.classList.add("highlight")`