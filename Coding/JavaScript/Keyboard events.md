---
tags:
  - JavaScript
  - event
  - DOM
---
# Keyboard events 
- keyboard events fire when you interact with the keyboard.
    - Typically they fire on a text box, but all elements support them.
    - there are 3 main keyboard events

| Name/code | Action                                                                                                                      |
| --------- | --------------------------------------------------------------------------------------------------------------------------- |
| keydown   | fire when you press a key on the keyboard<br>and fires repeatedly while holding down the key.                               |
| keyup     | fires when you release a key on the keyboard                                                                                |
| keypress  | Fires when you press a **character** key, **not** (left?) arrow key, home, or end.<br>Also fires repeatedly when held down. |
**Order:** keydown->keypress->TEXTBOX CHANGES->keyup
- if you press a non-character key, the keypress does not activate, otherwise, both keydown & press activate
## Handling keyboard events
- first, select the element via `querySelector()` or `getElementById()`
- then register the mouse event using `addEventListener()`
```html title:eg
<input type="text" id="message">
```
```js
let msg = document.getElementById('#message');

msg.addEventListener("keydown", (event) => {
    // handle keydown
});

msg.addEventListener("keypress", (event) => {
    // handle keypress
});

msg.addEventListener("keyup", (event) => {
    // handle keyup
});
```
## Keyboard event Properties
- keyboard event has two important properties: `key` and `code`.
    - `key` property returns the character pressed, 
    - `code` property returns the physical key code.
        - eg. pressing letter 'z': `e.key=z`, and `e.code=KeyZ`