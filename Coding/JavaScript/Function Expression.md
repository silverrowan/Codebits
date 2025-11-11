---
tags:
  - JavaScript
  - function
---

```js title:"Function Expression Syntax"
let message = function name(parameter1, para2, para3 = defaultValue) {
    /code it does;
};
```

```JS title:"eg. function expression"
let message = function favAnimal (animal) { 
    return animal + "is my fav!";
};
```

```js title:"function expression"
let sayHi = function () {
    alert( "Hello" );
};
```

```js title:"eg. function expression"
let varName = function name (parameter1, para2, para3 = defaultValue)  {
    //code it does, eg.
    return expression;
};
```
    
- function **expressions** *are* statements, so end with `};`
    - the `;` is not actually part of the function syntax -- its part of the #statement syntax!
    - function **[[Function Declaration|declarations]]** should **NOT** have `;` after the final `}`, as they are not statements.

![[Expression VS Declaration]]