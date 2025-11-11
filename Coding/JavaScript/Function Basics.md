---
tags:
  - JavaScript
  - function
---
## Functions
- a function is a (often named) reusable block of code.
    - Declared functions always need a name. Expressed functions can have a name but do not need to.
    - unnamed functions are called anonymous functions // eg. function () {...} ==NOTE: elsewhere describes them as not being stored OR named. clarify which is correct==
- There are [[4 Types of Functions]] in JavaScript!
    - not relevant (yet?)
- there are some general conventions around [[Function Names|naming functions]]
- **even if** usually called together, two independent actions usually deserve two functions separate functions.
    - we can use a third function that calls the two individual ones.
- There are multiple ways to define a function
    - [[Function Declaration|Declaration]] (in its own block)
    - [[Function Expression|Expression]] (inline w/ a variable or another function, etc)
    - ~~[[Function Constructor|Constructor]] .. wierd & I'm not bothering with~~
    - there are *also* special syntaxes for [[Arrow Functions]] and methods.

[[Calling Functions]]

[[Coding/JavaScript/Callback Functions]]
## Parameter
Parameters are the items listed between the function brackets.
Parameters are a placeholder for data that will be passed into the function.
    in the example, 'animal' is the #parameter
Not all functions have parameters declared, and some have parameters that are optional. (In which case have a default value set)
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
- Modern JavaScript engines support the [[Logical Operators#^60b689| nullish coalescing operator ??]]
## Arguments
The [[Value|values]] that are passed into the function
in example, `goat` is the #argument (in the parameter section, `cat` is the default argument)
## Function vs Method
a Method is a function that is part of an Object.

![[Functions are Values!]]