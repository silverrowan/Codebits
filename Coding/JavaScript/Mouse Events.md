---
tags:
  - JavaScript
  - DOM
  - event
source: https://www.javascripttutorial.net/javascript-dom/javascript-mouse-events/
---
## Mouse Events
- mouse events fire when you use the mouse to interact with the elements on the page
- DOM Level 3 events define 10 mouse events:

| Name/code  | Action                                                                                                                           | [[Event Bubbling\|Bubbles?]] | Fires on Child Elements? |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ------------------------ |
| mousedown  | pressing down on mouse button                                                                                                    | Yes                          | N/A                      |
| mouseup    | releasing mouse button                                                                                                           | Yes                          | N/A                      |
| click*     | both one mousedown AND one mouseup occur over Element. <br> **all three events fire! (CONFIRM THIS UNCLEAR IN NOTES**            | Yes                          | N/A                      |
| dblclick*  | (two click events). In practice, rarely used.                                                                                    | Yes                          | N/A                      |
| mousemove  | registers even w 1 px movement. <br> ~={pink}can lead to performance issues. =~<br> best to add only when needed and then remove | Yes                          | N/A                      |
| mouseover  | cursor moves from outside to inside boundaries of elmnt                                                                          | Yes                          | Yes                      |
| mouseout   | reverse of mouseover                                                                                                             | Yes                          | Yes                      |
| mouseenter | diff from over in that doesnt fire when moves over descendant elements                                                           | No                           | No                       |
| mouseleave | reverse as mouseenter                                                                                                            | No                           | No                       |
| wheel      | scrolls mouse or touchpad                                                                                                        | Yes                          | N/A                      |
*  \*if have both click and dblclic on same element wont know which of click or double click was done/triggered
### Mouse Event Properties
#### Button
 - mouse event objects have property "button" that indicates WHICH button on mouse clicked with, by number. `event.button`
     - 0 - "main" button, usually left
     - 1 - auxiliary button, usually middle/wheel
     - 2 - secondary, usually right btn
     - 3 - 4th btn, usually browser back btn 
     - 4 - 5th, usually browser forward btn
#### Modifier Keys
- We can also see if any modifier keys were in use. Each key has its own event property (boolean) which reports true if being held at time of mouse event.   
    - Syntax:
        - e.shiftKey
        - e.ctrlKey
        - e.altKey
        - e.metaKey (this is the windows/option key)
#### Screen Coordinates
- mouse coordinates are passed as properties to the event object
    - Screen Coordinates: reported in relation to entire screen
        - screenX - mouse in rel'n to entire screen
        - screenY
        - ![[Pasted image 20251113220159.png]]
    - Client Coordinates: reported in relation to application's client area
        - clientX - coords w/in applications client area
        - clientY
        - ![[Pasted image 20251113220206.png]]
```html title:"example Mouse Location Code"
<!DOCTYPE html>
<html>
<head>
    <title>JS Mouse Location Demo</title>
    <style>
        #track {
            background-color: goldenrod;
            height: 200px;
            width: 400px;
        }
    </style>
</head>
<body>
    <p>Move your mouse to see its location.</p>
    <div id="track"></div>
    <p id="log"></p>

    <script>
        let track = document.querySelector('#track');
        track.addEventListener('mousemove', (e) => {
            let log = document.querySelector('#log');
            log.innerText = `
            Screen X/Y: (${e.screenX}, ${e.screenY})
            Client X/Y: (${e.clientX}, ${e.clientY})`
        });
    </script>
</body>
</html>
```
### Registering mouse event handlers
- first, select the element via `querySelector()` or `getElementById()`
- then register the mouse event using `addEventListener()`
```html title:eg
<button id="btn">Click Me!</button>
```
```js
let btn = document.querySelector('#btn');

btn.addEventListener('click', (event) => {
    console.log('clicked');
});
//OR, less recomended:
//btn.onclick = (event) => {
//    console.log('clicked');
//};
```