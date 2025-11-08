---
tags:
  - JavaScript
  - function
---

```js title:"Function Declaration Syntax"
function funcName(parameter1, para2, para3 = defaultValue) {
    /code it does;
}
```

```JS title:"eg. function declaration"
function favAnimal (animal) { // this declares the expression, sets its name & parameters, and will containg the function code
    return animal + "is my fav!"; // the function code
}
```
- function **declarations** should **NOT** have `;` after the final `}`, as it is not a 'statement'
    - function **[[Function Expression|expressions]]** *are* statements, so end with `};`

![[Expression VS Declaration]]