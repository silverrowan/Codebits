```JS title:"eg. Function declaration for later examples:"
function favAnimal (animal = 'Cat') { 
    return animal + "is my fav!";
}
```

### Invoke a Function
- creating a function does NOT RUN it! To do that, you have to invoke/call the function elsewhere in the code. 
    - functions can be "called" (used) on its own or inside another function.
- you need to *DO* something with the return value.
    - in the above example, stored as a variable, or used as a console log message 
    - if neither was done the function result would return the String... to nowhere
- to call a function, type `functionName(parameter1, parameter2, ...)` where you want to use it
    - even if there are no parameters you **must** include the `()` to call the function, otherwise you're manipulating it *WITHOUT* running the code   
```JS title:"eg. calling function" 
let message = favAnimal ('goat'); //calling the function with paramenter value = 'goat', and storing the return of function in variable message

//alternative way to use the function vs above let message....
console.log(favAnimal('goat')); //calls the function, but shows a message in the console AND DOESNT STORE IN A VARIABLE

//functions can also be called like so, but then the return value isnt doing anything (yet?)
favAnimal ('goat')

//without choosing a paramenter vaule, only works if a default value is set, or doesnt have any parameters.
let message = favAnimal(); // would return default value of 'cat' + text
let message = favAnimal; //would just copy the function into favAnimal, NOT the result
```