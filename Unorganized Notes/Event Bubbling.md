---
tags:
  - JavaScript
  - event
  - DOM
---
# Bubbling
- Event's "bubble" - when an event triggers, it starts at the most specific element and then flows upward towards the least specific element (the `document` or even `window`) 
- ![[Pasted image 20251112235404.png]]
- the `click` event first occurs on the button that was clicked. 
    - then it goes up the DOM tree, firing on each node along its way, until it reaches the `document` object.
    - Note: modern web browsers bubble the event up to the `window` object
## Event Capturing
- in event capturing, and event starts at the *least* specific element and flows downward toward the most specific element.
- ![[Pasted image 20251112235633.png]]
## DOM Level 2 Event Flow
- DOM level 2 events specify that event flow has **three phases**
    - Capturing phase: event moves from top of page down to element
    - Target phase: the event reaches the element that was clicked
    - Bubbling phase: the event moves back up the page to the top.
    - ![[Pasted image 20251113000025.png]]
## why
    - this model allows you to:
        - catch the event early (during capturing)
        - react to the event late (during bubbling)
        - Stop it, in either phase, using methods like `stopPropagation()`

