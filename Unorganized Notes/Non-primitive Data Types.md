---
tags:
  - JavaScript
  - data-type
  - object
---
- In JavaScript [[Object & Symbol Data Types |objects]] are the only non-primitive [[Data Types]].
    - there are multiple "special objects"
        - [[Arrays]]
        - functions
        - ....
- object data types are used to store a **collection** of data & more complex entities
- When an object variable is defined it contains a **reference** to the object, **not** a copy
    - this means that any manipulation/mutation affects the *original object*, **even if inside a different variable/local copy**
- However, when REASSIGNING new/different data to a variable containing a copy of an object, it DOES NOT affect the original object.
```js
let animal = { species: "dog" };
let dog = animal;

// reassigning animal variable with a completely new object
animal = { species: "cat" };

console.log(animal); // { species: "cat" }
console.log(dog); // { species: "dog" }
```
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
```