---
tags:
  - JavaScript
  - function
  - argument
---
## What is the Rest parameter?
- the JavaScript Rest parameter allows a function to accept an indefinite number of arguments as an array.
    - it is represented by `...parameterName`, and must be the last parameter in the function..
```js title:"variadic via rest parameter"
function fun(...input) {
    let sum = 0;
    for (let i of input) {
        sum += i;    
    }
    return sum;
}
```