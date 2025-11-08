---
tags:
  - function
  - JavaScript
---

## Return Values
- these are the values that a function returns when it completes.
- Not all functions return a value! if there is no `return ...` then the function returns `undefined` as its value.
- One function can only `return` one value!
    - to get multiple values from a return, use an array, or destructure the result.
- Generally, a return value is used when the function is an intermediate step in a calculation.
### How to return a value
- to return a value from a custom function you need to use the `return` keyword.
```js title:eg.
function random(number) {
return Math.floor(Math.random() * number);
}
//could also be written as
function random(number) {
const result = Math.floor(Math.random() * number);
return result;
}
//but the first ver is more compact & quicker to write
```
- this `return` keyword allows the calling code to access the returned value.
- `return` can be in any place in the function, ***when reached, the function stops*** and the value is returned to the calling code.
    - **NOTE:** a `return` inside an `if() statement` inside another function **DOES NOT** just terminate the `if() statement`, but the function enclosing it!
- there may be multiple instances of `return` in a single function
- `return` may be used without a value. This causes the function to immediately exit.
    - a function with an empty `return`, or without it returns `undefined` 
- JavaScript parser **ALWAYS** assumes a `;` after `return`, so **DO NOT** put a new line between `return` and its value, no matter how long.
    - to wrap the expression across multiple lines, must put **AT LEAST** the opening parentheses `(` on the same line as `return` 
******
JS-Function Basics -> Return Values on 2025-11-05