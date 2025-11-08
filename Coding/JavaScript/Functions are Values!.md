---
tags:
  - JavaScript
  - function
  - value
---
## Functions are Values!
- Functions are [[Value|values]]! Regardless how created.
    - functions are a special kind of #object. %% [[JS-typeof operator |typeof( )]] returns 'function' for functions, but that's not a data type. %%
    - this means they can be manipulated like any other value!
```js title:"copy function to new variable"
function sayHi() { // (1) create
    alert( "Hello" );
}
let func = sayHi; // (2) copy

func(); //alert: Hello (3) run the copy
sayHi(); //alert: Hello (this still works too)
```
- this example detail explanation
    - The function declaration (1) create the function and puts it into the variable `sayHi`
    - line (2) copies it into the variable `func` 
        - NOTE the **LACK** of `()`. 
        - **IF** this was `let func = sayHi()` then it would *write the result* of calling `sayHi()`, not the function itself 
    - Now the function can be called as either `sayHi()` or `func()`.
```js title:"eg. Function as variable vs as function"
function sayHi() {
    alert( "Hello" );
};
alert( sayHi ); // SHOWS THE FUNCTION CODE, DOES NOT RUN THE FUNCTION. note lack of '()'
alert( sayHi() ); //WOULD run the code
```