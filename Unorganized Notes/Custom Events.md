---
tags:
  - JavaScript
  - event
  - DOM
---
# Custom Events
- these are events that you define and dispatch yourself.
- they allow you to create your own communication system between different parts of your app.
### example:
```js title:"change element style"
//highlights an element by changing its background color to yellow
function highlight(elem) {
    elem.style.backgroundColor = 'yellow';
}
```
```js title:"highlight AND callback function THIS IS NOT a custom event"
//highlight, mostly same as above
function highlight(elem, callback) {
    elem.style.backgroundColor = 'yellow';
    //executes a callback function, inside the current function
    if (callback && typeof callback === 'function') {
        callback(elem);
    }
}

let note = document.querySelector('.note');
function addBorder(elem) {
    elem.style.border = "solid 1px red";
}
//activating the "highlight function", with the "addBorder" as a callback
highlight(note, addBorder);
```

By custom event:
```js 
function highlight(elem) {
    const bgColor = 'yellow';
    elem.style.backgroundColor = bgColor;

    // create the event
    let event = new CustomEvent('mark', {
        detail: {
            backgroundColor: bgColor
        }
    });
    // dispatch the event
    elem.dispatchEvent(event);
}

// Select the div element
let div = document.querySelector('.note');

// setup function: Add border style
function addBorder(elem) {
    elem.style.border = "solid 1px red";
}

// Listen to the highlight event
div.addEventListener('mark', function (e) {
    addBorder(this);

    // examine the background
    console.log(e.detail);
});

// highlight div element ---> calling the function to trigger the 'mark' event
highlight(div);
```
- how it works:
    1. declare `highlight()` function that highlights a function and triggers the `mark` event
    2. select the `<div>` element using `querySelector()`
    3. set up listener for `mark` event. 
        - inside the event listener call the `addBorder()` function and show the `detail` property in the console
    4. Call the `highlight()` function to trigger the `mark` event
## Creating Custom events
- to make the code more flexible you can use custom events
- syntax: `let event = new CustomEvent(eventType, options);`
    - *eventType*: string that represents the name of the event
    - *options*: an object that has the `detail` property that contains any custom information about the event.
- `CustomEvent` inherits from the regular `Event` object and adds the `detail` property for passing custom data
```js title:"custom event 'mark'"
let event = new CustomEvent('mark', {
    detail: {backgroundColor: 'yellow'}
});
```
## Dispatching custom events
- after creating a custom even you need to 
    - attach it to a DOM element
    - trigger it by using `dispatchEvent()`
        - syntax: domElement.dispatchEvent(event)
## Why use custom events?
- they allow you to decouple code execution, allowing one piece of code to run after another one completes.
    - for example. You can place event listeners in a separate script file and have multiple listeners for the same event
        - ??? are these two separate examples or one?