## Arrow Functions
- arrow functions are a specific form of anonymous function expression
    - (often used in event listeners)
- Simpler visually, but mostly the same as a simple expressed funtion.
    - there ARE some subtle differences btwn arrow and normal functions (will be relevant later)
- Arrow functions have no bindings to this, arguments, or super, dont use as methods. Cannot be constructors
Instead of the standard function form:
- `function functionName(parameter) {
  `return parameter * 2;
  `}, 
can write: 
- `(parameter) => {
  `return parameter * 2;
  `};
- OR
- (parameter) => { return parameter * 2; };
**IF** the function only *takes 1 parameter*, can omit the brackets
- `parameter => {...}
**IF** the function only *contains one line that is a return statement*, can omit curly braces and return keyword
- `(parameter) => reternValue;

`function functionName(parameter) {
`return parameter * 2;
`};
AND
`(parameter) => {return parameter * 2;};
AND 
`parameter => parameter * 2;
ARE ALL EQUIVALENT

```js title:eg.2
a => a + 100 
//is equiv to:
function (a) {
    return a + 100;
};
```
  
```js title:eg.3
let varName = (parameter1, para2,..., paraN) => expression; 
```            
### Valid Arrow Function Syntax options
- `() => expression` 
    - when there are no arguments/parameters the `()` must be present
- `param => expression
- `(param) => expression
- `(param1, param2) => expression
- `() => {statements}
- `param => {statements}
- `(param1, param2) => {statements}    

- using `{}` allows multiple statements, **BUT**
    - if expression is in curlybrackets statements--**THEN MUST INCLUDE** return keyword. 
- omit `{}` only if the arrow function directly returns just an expression

```js title:"multi-line arrow function eg."
let sum = (a, b) => {
    let result = a + b;
    return result; // if we use {} then need an explicit 'return'
};

alert( sum(1, 2) );
```
