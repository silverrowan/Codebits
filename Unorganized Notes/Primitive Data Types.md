---
tags:
  - undefined
  - JavaScript
  - data
  - data-type
  - primitive
---
- In JavaScript there are 7 primitive [[Data Types]]. (& one non-primitive)

- When a primitive variable is defined it contains a new (copy of) the data, and is separate from what created the data. 
    - this means that any manipulation/mutation of a copied variable affects the **new** variable's data **only**
    - this also comes into play when passing objects into a function:
```js 
function increaseCounterObject(objectCounter) {
  objectCounter.counter += 1;
}

function increaseCounterPrimitive(primitiveCounter) {
  primitiveCounter += 1;
}

const object = { counter: 0 };
let primitive = 0;

increaseCounterObject(object); // = 1, DESPITE being inside a function
increaseCounterPrimitive(primitive); // = 0, BECAUSE happened inside a function, to a DIFFERENT, local variable (parameter)
    - IF the parametrer had the SAME NAME as the variable it STILL would not change the outside variable! (because of scope rules it is treated as a different variable/a copy)