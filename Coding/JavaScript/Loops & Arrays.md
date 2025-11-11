---
tags:
  - JavaScript
  - function
  - loop
  - array
---
## What is a loop?
- control structures that allow you to execute a block of code repeatedly


## What is an array?
- data structures that can store multiple values in one variable

## looping through a collection
- Usually when using a loop you want to do something to every item in a collection.
    - Arrays, Set, and Map are all collections

## what is TDD (test driven development)?
- practice of writing tests for your code before writing the code itself.


[[for loop]]

[[Looping through a collection]]

[[Exiting loops & iterations w Break and Continue]]

[[while & do... while loop]]

[[Tests Driven Development (TDD)]]








### for...of loop
`for (const cat of cats) {`
`        console.log(cat);
`    }
1. given the collection `cats`, get the first item in the collection
2. Assign it to the variable `cat` and then run the code between the curly braces `{}`
3.  Get the next item, and repeat until you've reached the end of the collection

### Specialized loops for collections
#### map()
- do something to each item in a collection and create a new collection containing the changed items
- calls the function once for each item in the array, passing the item. It then adds the return value from each function call to a new array, and then finally returns the new array.
 ```js 
function toUpper(string) {
    return string.toUpperCase()
} 
 
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const upperCats = cats.map(toUpper);

console.log(upperCats);  //returns ["LEOPARD", "SERVAL", ...]
  ```
#### filter()
- use filter() to *test* each item in a collection, and create a new collection containing only items that match
    - looks very similar to map, but it returns a boolean - if its true then the item is included in the new array. 
```js
function lCat(cat) {
    return cat.startsWith("L");
}

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = cats.filter(lCat);

console.log(filtered) //returns: ["Leopard", "Lion"]
```

- note that map() and filter() are both often used with [[Function Expression]]s
- we can rewrite the example to use a function expression like so:
    ```js 
    const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];
    const filtered = cats.filter((cat)=>cat.startsWith("L"));
    console.log(filtered); //returns: ["Leopard", "Lion"]
    ```

The standard for loop
```js
for(initializer; condition; final expression) {
    //code to run
}
```
here we have:
    - keyword `for (...)` w parentheses
    - Inside the parentheses we have 3 item, separated by semi-colons
        - An initializer - usually a variable set to a (start) number, also called a counter variable  he loop should stop looping. Generally an expression w a comparison operator, a test  to see if exit condition has been met.
        - A final-expression - this is always run each time the loop goes through a full iteration. Usually increments or decrements the counter variable, to bring it closer to no longer being true.
    - Curly braces that contain a block of code - this will be run each time the loop iterates.
    - 










for (let i = 0; i < var; i++) { //note booliean operator will change depending on use
    //code
}

ARRAYS IN JS ARE NOT IDENTIFIED BY NAME - ATTEMPTS TO USE NAMED INDEXES WILL RE-DEFINE ARRAY TO REG OBJECT 

Arrays cannot be accessed from the end by Array.[-n], BUT CAN be accessed by Array.at(-1)!


//Array sorting is by String, even if numeric variables!
//to do so numerically need a "Compare function" which...how is this telling it to compare.....?
    Array.sort(function(a, b){return a - b}) (ascending)
    Array.sort(function(a, b){return b - a}) (descending)
//    note SORT function will apply to origianl array even if creating a new one.
//    use toSorted to sort new array and not touch OG array
        //eg.
        const numbers = [45,4,9,,16,25];
        const sortNum = numbers.toSorted() //sorts like a string
        const sortLikeNum = numbers.toSorted(function(a , b) {return a - b}) // sorts as numbers
            console.log(numbers)
            console.log(sortNum)
            console.log(sortLikeNum)
    Array.sort(function(){return 0.5 - Math.random()}); random(ish)
//Most popular *random sort* method is called "Fisher Yates Shuffle"
    for (let i = Array.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let k = Array[i];
        Array[i] = Array[j];
        Array[j] = k;
    }