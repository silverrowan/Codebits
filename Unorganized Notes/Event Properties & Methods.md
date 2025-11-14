---
tags:
  - JavaScript
  - DOM
  - event
---
#### Access Event Information
- we can access information about the event (such as what key pressed, etc) if we pass a parameter to the function being called.
```js 
btn.addEventListener("click", function(e) {
    console.log(e);
});
```
- the `e` parameter in the callback function contains an object that references the **event** itself.
    - Within this obj you can access many useful properties and methods, such as: which button or key was pressed, or information about the event's **target**. (The DOM node clicked)
    - JavaScript knows the parameter is an event because an event listener callback takes an `Event` object by definition. `e` is by convention?
    - When the callback is run, the event handler passes in its own reference to the event.
        - more about event objects: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events#event_objects
```js title:"btn eventlistener e"
btn.addEventListener("click", function (e) {
  console.log(e.target);
}); //logs the target - the button html code

btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
}); //changes the button background to blue
```

## Event Properties & Methods
<table><thead><tr><th>Property / Method</th><th>Description</th></tr></thead><tbody><tr><td>bubbles</td><td>true if the event bubbles</td></tr><tr><td>cancelable</td><td>true if the default behavior of the event can be canceled</td></tr><tr><td>currentTarget</td><td>the current element on which the event is firing</td></tr><tr><td>defaultPrevented</td><td>return true if the preventDefault() has been called.</td></tr><tr><td>detail</td><td>more information about the event</td></tr><tr><td>eventPhase</td><td>1 for capturing phase, 2 for target, 3 for bubbling</td></tr><tr><td>preventDefault()</td><td>cancel the default behavior for the event. This method is only effective if the <code>cancelable</code> property is true</td></tr><tr><td>stopPropagation()</td><td>cancel any further event capturing or bubbling. This method only can be used if the <code>bubbles</code> property is true.</td></tr><tr><td>target</td><td>the target element of the event</td></tr><tr><td>type</td><td>the type of event that was fired</td></tr></tbody></table>
- Note that the event object is only accessible inside the event handler. Once all the event handlers have been executed, the event object is automatically destroyed.
### preventDefault()
- To prevent the default behavior of an event, you use the `preventDefault()` method.
- For example, when you click a link, the browser navigates you to the URL specified in the href attribute: `<a href="https://www.javascripttutorial.net/">JS Tutorial</a>`
- However, you can prevent this behavior by using the `preventDefault()` method of the `event` object:
```js let link = document.querySelector('a');

link.addEventListener('click',function(event) {
    console.log('clicked');
    event.preventDefault();
});
```
- **Note that** the `preventDefault()` method **does not stop** the event from **bubbling** up the DOM. 
- An event can be canceled when its cancelable property is true.

- @ NOTE: default form involves refreshing the page!

### stopPropagation()
- The `stopPropagation() `method immediately stops the flow of an event through the DOM tree. However, it does not stop the browser’s default behavior.

See the following example:
```js
let btn = document.querySelector('#btn');

btn.addEventListener('click', function(event) {
    console.log('The button was clicked!');
    event.stopPropagation();
});

document.body.addEventListener('click',function(event) {
    console.log('The body was clicked!');
});
```
- Without the stopPropagation() method, you would see two messages on the Console window.
- However, the click event never reaches the body because the `stopPropagation() `was called on the click event handler of the button.
## Summary
- An event is an action occurred in the web browser e.g., a mouse click.
- Event flow has two main models: bubbling and capturing.
- Use addEventListener() to register an event that connects an event to an event listener
- The event object is accessible only within the event listener.
- Use preventDefault() method to prevent the default behavior of an event, but does not stop the event flow.
- Use stopPropagation() method to stop the flow of an event through the DOM tree, but does not cancel the browser default behavior.

[[Create & Activate Events]]
[[Event Bubbling]]
[[Event delegation]]

- [[Commonly Useful Events]]
- [[Mouse Events]]
- [[Keyboard events]]