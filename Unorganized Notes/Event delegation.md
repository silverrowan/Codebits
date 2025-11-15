---
tags:
  - JavaScript
  - event
  - DOM
---
# Event delegation
- assign single event handler to parent element instead of multiple ones to child elements.
- using event [[Event Bubbling]] to handle events at a higher level in the DOM than the element on which the event originated
- then use switch statement to separate out the different responses eg
```js
menu.addEventListener('click', (event) => {
        let target = event.target;
    
        switch(target.id) {
            case 'home':
                code
            break;
            case...etc
        }
    });
```
## Introduction
- If you have a large number of event handlers on a page they will *directly* impact performance
        - Other source suggests this is not the case until 100s of obj. Clarify w/ instructors. #UNCLEAR 
    - First: ea event handler is a function, which is also an object that takes up memory. The more objects in memory, the slower the performance
    - Second: it takes time to assign all the event handlers, which causes a delay in the interactivity of the page
- To solve this, we can leverage [[Event Bubbling]]. 
- Instead of having multiple event handlers, you can assign a **single** event handler to handle all the `click` events.
```html
<ul id="menu">
    <li><a id="home">home</a></li>
    <li><a id="dashboard">Dashboard</a></li>
    <li><a id="report">report</a></li>
</ul>
```
```js title:"Each menu item with its own event listener"
//this is less optimal, slower.
let home = document.querySelector('#home');
home.addEventListener('click',(event) => {
    console.log('Home menu item was clicked');
});

let dashboard = document.querySelector('#dashboard');
dashboard.addEventListener('click',(event) => {
    console.log('Dashboard menu item was clicked');
});

let report = document.querySelector('#report');
report.addEventListener('click',(event) => {
    console.log('Report menu item was clicked');
});
```
```js title:"Each menu item SHARES an event listener"
//less bloat
let menu = document.querySelector('#menu'); //Select PARENT 

menu.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.id) { //switch based on 'target ID'
        case 'home':
            console.log('Home menu item was clicked');
            break;
        case 'dashboard':
            console.log('Dashboard menu item was clicked');
            break;
        case 'report':
            console.log('Report menu item was clicked');
            break;
    }
});
```
- explanation:
    - when you click on *any* `<a>` element **inside** the `<ul id="menu">` item
        - the `click event` bubbles to the parent element, which is the `<ul>` element
        - So, instead of handling the `click` event of teh individial `<a>` element, you can capture the `click` at the parent element bubbling
    - In the click event listener, you can access the target property which will reference the element that dispatched the event. (To get the ID, use target.id) THIS IS THE **INDIVIDUAL** `<a>` element, **NOT** the parent!
    - Using the ID, you can the code respond appropriately.
### Benefits of Element Delegation
    - when possible, you can use a single event handler on the `document` that will handle *all* events of a particular type!
    - Doing so has these benefits
        - Less memory usage, better preformance
        - Less time required to set up the event handlers on page load
        - the `document` object is available immediately. As long as the element is rendered, it can start functioning without delay. No need to wait for `DOMContentLoaded` or `load` events