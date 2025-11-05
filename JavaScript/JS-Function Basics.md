******Javascript Function Basics******
**************************************

## Functions
a function is a (often named) reusable block of code. 
- there are some general conventions around [[JS-Function Names|naming functions]].
- two independant actions usually deserves to functions, even if they're usually called together
    - in that case, we can use a third function that calls the two individual ones.
unnamed functions are called anonymous functions // eg. function () {...}

```js title:"Function Syntax"
Syntax: function name(parameter1, para2, para3 = defaultValue) {
            /code it does;
        };
```

```JS title:"eg. function declaration"
function favAnimal (animal) { // this declares the expression, sets its name & parameters, and will containg the function code
    return animal + "is my fav!"; // the function code
};
```

```JS title:"eg. calling function" 
let message = favAnimal ('goat'); //calling the function, and storing the return of function in variable message

/alternative way to use the function vs above let message....
console.log(favAnimal('goat')); //calls the function, but shows a message in the console AND DOESNT STORE IN A VARIABLE

/functions can also be called like so, but then the return value isnt doing anything (yet?)
favAnimal ('goat')
```
### Invoke a Function
creating a function does NOT RUN it! To do that, you have to invoke/call the function elsewhere in the code. 
    functions can be "called" (used) on its own or inside another function.
you need to DO something with the return value.
    --in the above example, stored as a variable, or used as a console log message 
    --if neither was done the function result would return the String... to nowhere
to call a function, type functionName(parameter1, parameter2, ...) where you want to use it
    OR
### Expression VS Declaration
A function declaration is declared as a separate statement, and is acccessible in the Main code flow (scope)
    declarations are 'hoisted'
    declared functions CAN be called earlier than defined!
A function expression is defined within a code block -- inside an expression or other construct. 
    Only useable at that moment. Cannot be called before defined.
    expressed functions are accessible anywhere in that block, BUT NOT outside it (local scope)
```js title:"eg. function expression"
let varName = function name (parameter1, para2, para3 = defaultValue)  {
        //code it does, eg.
        return expression;
    };
```
## Parameter
Paramenters are the items listed between the function brackets.
Paramenters are a placeholder for data that will be passed into the function.
    in the example, 'animal' is the parameter
Not all functions have paramenters declared, and some have parameters that are optional. (In which case have a default value set)
### Create Optional Parameters
To create a function with optional parameters, specify a default value with `=`
```js title:"eg. parameters w defaults"
function favAnimal (animal = 'Cat') {
    ...
};
/This parameter will use the default value of cat if called without another argument.
```
in this example
    `favAmimal()` is equiv to `favAnimal('Cat')`, but can be replaced w/ `favAnimal('anything else')`)
- the default 'value' can also be a more complex expression, such as another function, math, etc.
```js title:"eg. complex default parameter"
  function favAnimal (animal = otherFunction( )) {
  //otherFunction() is only executed if animal parameter is left empty/undefined. The result becomes the argument.
  }
  ```
old, pre-default parameters methods of dealing with unfilled parameters:
```js title:"eg. alt spec for default parameters"
function functionName(param) {
    if (param === undefined) {
        param = 'n/a';
    }
    /function code;
}
/OR
function functionName(param) {
    text = text || 'n/a';
        //if value of text is falsy assign default value of 'n/a'
        //assumes text == "" is the same as undefined/no text at all
    /function code;
}
```
- Modern JavaScript engines support the [[JS-Logical Operators#^60b689 | nullish coalescing operator ??]]
## Arguments
The values that are passed into the function
in example, `goat` is the argument (in the parameter section, `cat` is the default argument)
## Function vs Method
a Method is a function that is part of an Object.
## Arrow Functions
arrow functions are a specific form of anonymous function expression
    (often used in event listeners)
Simpler visually, but mostly the same as a simple expressed funtion.
    there ARE some subtle differences btwn arrow and normal functions (will be relevant later)
//Arrow functions: no bindings to this, arguments, or super, dont use as methods. Cannot be constructors
instead of the standard function form:
- `function functionName(parameter) {
  `return parameter * 2;
  `}, 
can write: 
- `(parameter) => {
  `return parameter * 2;
  `};
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
- `() => expression
- `param => expression
- `(param) => expression
- `(param1, param2) => expression
//if expression is in curlybrackets statements--THEN INCLUDE return keyword. 
// omit brackets only if directly returns an just an expression
- `() => {statements}
- `param => {statements}
- `(param1, param2) => {statements}    
## Function Scope
### What is Scope
when a function is created, the variables etc defined inside it are in their
    own separate compartment inside the function - they can't be targeted/reached
    by code outside the function.
NOTE: the same scope rules DO NOT apply to loop and conditional blocks, 
    JUST functions -- even though they look very similar.
    
### Global Scope
The top-level, outside all functions.
Values defined here are accessible from everywhere in the code.
### Local Variables
- variables declared inside a function are ONLY visible inside that function
### Outer Variables
- functions can access & modify variables declared outside of them though
- the outer variable is only used if there is no local one.
- if a same-named variable is declared inside and outside the function than the inside one 'shadows' the outer one, and the outer one is not used or altered
### Global Variables
- variables declared outside of *any* function
- these variables are visible to all functions (unless shadowed by local variables)
- Its good practice to minimize use of global variables.
    - modern code has few to no globals, most variables reside inside their functions
    - sometimes they can be useful to store project-level data.

### Why silo variables etc
primarily for security and organization
this allows you to call in external scripts that may be using the same variable names 
    without them messing with your script variables of the same name.
If calling multiple external script files into the same documennt
    and they use the same glovbal variable names an error will stop the second one from loading
    if they use the same global function names, the second function will overwrite (re-declare) the first version of the function
        Keeping this script locked away in functions prevents this problem
## Return Values
- these are the values that a function returns when it completes.
- Not all functions return a value
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
- there may be multiple instances of `return` in a single function
- `return` may be used without a value. This causes the function to immediately exit.
    - a function with an empty `return`, or without it returns `undefined` 
- JavaScript parser **ALWAYS** assumes a `;` after `return`, so **DO NOT** put a new line between `return` and its value, no matter how long.
    - to wrap the expression across multiple lines, must put **AT LEAST** the opening parentheses `(` on the same line as `return` 