---
tags:
  - JavaScript
  - loop
  - array
---
## Looping through a collection
One type of collection is an array
There are other collection types in JavaScript, eg. Set and Map
```js title:"for...of: looping through a collection"
const cats = ["Leopard", "Lion", "Puma", "Tiger", "Caracal"]

for (const cat of cats) { //why is it using const??? HOW is it using const?
    //code, eg. console.log(cat);
}
```
   - this is basically a shortcut code - 
       - equivalent to swapping the (const cat of cats) with (i=0, i<= cats.length(); i++ ) AND using `cats[i]` in the code instead of 'cat' 
   - looping is built into the `for (const thing of things) {...}` execution already.
### looping through a collection with a "for" loop
- unless access to array position is needed, the "for...of" structure is better
    - easier to read AND
    - less opportunity for mistakes
```js title:"for: looping through a collection"
const cats = ["Leopard", "Lion", "Puma", "Tiger", "Caracal"]

for (let i = 0; i < cats.length; i++) {
    //code, eg. console.log(cat);
} //functionally identical to the for (const cat of cats) ex above
```


### map() loop
```js title:"map() loop"
function toUpper(string){
    return string.toUpperCase();
    }

const catsArray = ["Leopard", "Lion", "Puma", "Tiger", "Caracal"]

const upperCats = cats.map(toUpper);
//creates NEW array 'upperCats', with transformed entries per mapped function
//NOTE function name is written like a variable, not a function. 

or another example: 
values = [1,2,3,4];
values.map(n => function(functionParam1, functionParam2))
```
   - looping is built into the `const mappedArray = array.map(functionName)` execution already.
### filter() loop
```js title:"filter() loop"
function lCat(cat){
    return cat.startsWith("L");
    }

const catsArray = ["Leopard", "Lion", "Puma", "Tiger", "Caracal"]

const lCats = cats.filter(lCat);
//creates NEW array 'lCats', with entries that return positive to the comparison. ["Leopard", "Lion"] 
//NOTE function name is written like a variable, not a function. 

or another example: 
values = [1,2,3,4];
values.map(n => isEven( n )) // returns [2,4]
```
   - looping is built into the `const filteredArray = array.filter(functionName)` execution already.
### reduce ()
.reduce( (total, currentItem) => total + currentItem, initialVarTotalValue ) 
- goes through every element in array and applies the callback function to it. (setting an initial value to 0 or 1 (per math function) is best in case of empty array\[0])
- It updates total without actually changing the array itself. After it’s done, it returns total.