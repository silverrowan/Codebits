---
tags:
  - JavaScript
  - DOM
  - event
---
## 3 Primary Ways to Listen for Events 
- specify function attributes directly on HTML elements
- set properties in the form of `on<eventType>`, eg `onclick` on `onmousedown` on the DOM nodes in your JavaScript.
- attach event listeners to the DOM nodes in your JavaScript
    - Event listeners are the preferred method, but you will see the others in use regularly.
### directly on HTML
`{html icon}<button onclick="alert('Hello World')">Click Me</button>` <button onclick="alert('Hello World')">Click Me</button>
    - with a named function: `{html icon}<button onclick="alertFunction()">CLICK ME BABY</button>`
- this method is less idea because we're cluttering the HTML with JavaScript
- AND this method can only set *one* onclick property per DOM element, so we're unable to run multiple separate functions in response to click event
### on\<eventType> on DOM nodes
HTML `{html icon} <button id="btn">Click Me</button>` <button id="btn">Click Me</button>
```js
const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World!")
//w a named function
btn.onclick = alertFunction;
```
- A little better - the JS is now out of the HTML and in its own file
- but a DOM element can still only have one onclick property
### event listeners
HTML `{html icon}<button id="btn">Click Me Too</button>` <button id="btn">Click Me Too</button>
```js
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    alert("Hello World");
});
//w a named function
btn.addEventListener("click", alertFunction);
```
- Now HTML & JS are separated, AND we allow multiple event listeners if needed.
```js title:"more examples"
//give a single item a click function - only allows one event type!
    btn.onclick = () => functionCode
//give a single item multiple listeners
    btn.addEventListener("click",  () => functionCode)
//give all of an item a click function
    buttons.forEach((button) => {
        button.addEventListener("click", () => functionCode)
    });
```
### Attaching listeners to groups of nodes
- get a NodeList of all items matching a specific selector with `querySelectorAll('selector')`. In order to add a listener to each of them, we need to iterate through the whole list.
```html
<div id="container">
    <button id="one">Click Me</button>
    <button id="one">Click Me</button>
    <button id="one">Click Me</button>
</div>
```
```js 
//buttons is a NODE LIST. It looks and acts much LIKE an array, but it is NOT an array.
const buttons = document.querySelectorAll("button");

//we use the .forEach method to iterate through each button
buttons.forEach((button) => {
    //and for each one we add a 'click' listener
    button.addEventListener("click", () => {
        alert(button.id);
    });
});
```
-  this is just a small selection of DOM manipulation and event handling, but its enough to get started.

![[Commonly Useful Events]]

[[Create & Activate Events]]
[[Event Bubbling]]
[[Event delegation]]
[[Event Properties & Methods]]
- [[Commonly Useful Events]]
- [[Mouse Events]]
- [[Keyboard events]]

[[dispatchEvent]]