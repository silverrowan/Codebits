---
tags:
  - JavaScript
  - array
---
- the spread (...) syntax allows an iterable (such as an array or string) to be expanded in places where zerpo or more arguments (for function calls) or elements (for array literals) are expected.
- In an object literal the spread syntax enumerates the properties of an object and add the key-value pairs to the object being created
- Spread syntax looks exactly like [[rest parameter|rest syntax]] 
    -  in a way, it is the opposite:
        - Spread syntax "expands" an array into its elements
        - rest syntax collects multiple elements and "condenses" them to a single element.
```js title:"eg"
function sum(x, y, z) {
    return x + y + z; 
}

const numbers = [1, 2, 3,];

console.log( sum(...numbers) ); //returns 6
```

```js title:Syntax
myFunction(a, ...iterableObj, b) // Function arguments
[1, ...iterableObj, '4', 'five', 6] //Array literals
{ ...obj, key: 'value' } //Object literals
```

- When using spread syntax for function calls, be aware of the possibility of exceeding the JavaScript engine's argument length limit. See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply