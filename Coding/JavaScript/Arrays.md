---
tags:
  - JavaScript
  - array
  - data-type
  - data
  - collection
---
## Arrays
- arrays store *ordered* lists of values. 
    - each array item ('element') has a position count. This starts at '0' not '1'
        - so first is at position '0', second at '1' etc. arrayPosition = [0, 1, 2, 3, ... n-1]
- arrays are a type of "collection"
- they can store *any* type of element, including objects or another array.
### Declaring an array
- blah: ` let arrName = new Array()`
    - not used often. 2 main reasons.
        1. its longer
        2. it has an annoying quirk. If an array is called with a single number as an element, it will actually generate an array of that length, with no items!
           `let array = new Array(2)` DOES NOT create array = [2]
           it creates array [,,,]... array[0]=undefined (technically completely empty slots, no element there at all, instead of 'containing' undefined--which some array methods will treat differently from empty  ones!), array.length=2!
-  ____ method (more commonly used): `let arrName = [];
    - can also include initial elements for the array: let arrName = [1, 2, 3];
- the array may be declared with a trailing comma (comma after the last value), without it adding an item to the array.
    - an array declared so: let arrName = [1, 2, 3, ] is still only 3 elements
    - AND it has the beneficial effect of making it easier to add items as all lines are alike
- declaring an array of arrays eg: let matrix = [ [1,2,3], [4,5,6], [7,8,9] ];
## Manipulating & Retrieving array values
- we can get an element by using the array name and its position in []
        eg. array: `let fruits = ["Apple", "Orange", "Plum"]; 
                `alert( fruits[0] ); //alert "Apple"
                `alert( fruits[2] ); //alert "Plum"`
                `alert( fruits[3] ); //alert UNDEFINED`
    - there is a new version of this that allows NEGATIVE numbers - these count from the END of the array.
                `alert( fruits.at[2] ); //still alert "Plum"
                BUT
                `alert( fruits.at[-2] ); //alert "Orange"!`
                used to have to do: `alert( fruits[fruits.length-2] );
- we can replace an element
    `fruits[2] = 'Pear'; //now 'Pear' replaces 'Plum'`
- add a new item to the array (the MODIFIED one from just above)
    `fruits[3] = 'Lemon'; // now fruits = ["Apple", "Orange", "Pear", "Lemon"]`
- count the number of elements in the array (using the MODIFIED one from just above)
    `alert(fruits.legth) //returns 4`
- we can show the whole array (using alert)
    `alert(fruits) // returns: Apple,Orange,Pear,Lemon` note the spaces not inside "" have been ignored.
    
- retrieving an item from an array of arrays: 
    - eg: let matrix = [ [1,2,3], [4,5,6], [7,8,9] ];
            alert( matrix[0]\[1]); //alerts "2" the first '[0]' finds [1,2,3], and the second '[1]' tells it to look in position 2 (of the array in position 1) - basically you nest the array calls KINDA - not really nesting. array nesting is someething else .... but close the brackets first....
                does this mean if you can theoretically do something like this: `let number = [1,2,3][1]` and have number = 2?
                HAHA! YES! IT DOES! and it records it as number type, not array type. its a dumb thing to do, but behaves as expected.
## Math operations with arrays
- arrays, even arrays of a single number, or empty, like [ ], and [1] are treated as strings! so, [1] + 1 = 11! 
```js
let arrayName = [1, 2, 3] //each element is a number

alert( arrayName ); // alerts 1,2,3

alert( [] + 1); // "1" NOTE STRING
alert( [1] + 1); // "11" !! even an array of one here is treated as a string, not a number

```
## Comparing arrays
- arrays should NOT be compared with \=\=, > or <, etc
- this operator has no special treatment for arrays, it works with them as any other object.
    - see object comparisons for how this behaves #later-lesson 

## Array Methods
- common manipulations of an array
### pop/push & shift/unshift
- A [[Queue]] is the most common use of arrays (FIFO)
    - `push` appends an element to the end
    - `shift` gets (and removes) an element from the begining, advancing the queue so the 2nd element becomes the 1st 
- Alternatively, they can be used as a stack (LIFO)
    - `push` adds an element to the end
    - `pop` takes an element from the end

Methods for the end of an array:
eg. array: `let fruits = ["Apple", "Orange", "Plum"]; `
    - `alert( fruits.at(-1) ); //gets and leaves "Plum"` 
    - `alert( fruits ); //is still ["Apple", "Orange", "Plum"]`
    - 
    - `alert( fruits.pop( ) ); //gets and removes "Plum"
    - `alert( fruits ); //is now ["Apple", "Orange"]`
    - `alert( fruits.push("Pear") ); //adds "Pear" to the end of the array, and alerts Apple,Orange,Pear`
        -  eqiv to: `fruits[fruits.length]="Pear" (adding after last posn)

Methods for the beginning of an array:
eg. array: `let fruits = ["Apple", "Orange", "Plum"]; `
    - `alert( fruits.at(0) ); //gets and leaves "Apple"` 
    - `alert( fruits ); //is still ["Apple", "Orange", "Plum"]`
    - 
    - `alert( fruits.shift( ) ); //gets and removes "Apple"
    - `alert( fruits ); //is now ["Orange", "Plum"]`
    - `alert( fruits.unshift("Pear") ); //adds "Pear" to the start of the array, and alerts Pear,Apple,Orange,Plum if using og array, and Pear,Orange,Plum if using previously modified array`
        -  eqiv to: `fruits[fruits.length]="Pear" (adding after last posn)

Push and unshift can add multiple elements at once:
```js 
let fruits = ["apple"]
fruits.push("orange, "peach");
fruits.unshift("pineapple", "lemon");

alert( fruits ); //alerts: pineapple,lemon,apple,orange,peach
```
 - pop and push are fast running, which shift and unshift are slow.
     - this is b/c pop & push only affect one element (& length), while shift and unshift affect the position of all elements (& length).
### Internals
- an array is a special kind of object.
- The [ ] used to access a property: `array[0]` comes from the object syntax!
    - essentially the same as `object[key]`, where array is the object and the numbers are used as keys.
    - They extend objects providing special methods to work with ordered collections of data (and the length property!? why not in reg obj?),
        - but are at the core an object, so behave like an object!
        - *however* if we start working with an array like a 'regular object' a lot of arrays' internal representation/optimizations break!
            - engine sees that its being treated as a regular obj and not an array
            - if you need arbitrary keys, you probably need a regular object
## looping arrays
 - `for (let item of arrayName)` - modern syntax, for items only
 - `for (let i=0; i<arr.length; i++)` - older syntax. Faster! Provides access to position number. 
### looping with for... in
- **Don't do it.** (`for (let i in arrayName))
- it is technically possible to loop through arrays with the for... in structure (for regular objects), but its a bad idea.
    - potential problems:
        - loops through ALL properties, not just numeric ones
        - array-like objects LOOK LIKE but ARE NOT arrays, the for... in loop will list through all additional properties, and these 'extra' properties can be a problem.
        - the for...in loop is optimized for regular obj NOT arrays, and is thus 10-100x slower! 
## array 'length'
- the length property automatically updates when we modify the array
    - BUT its not ACTUALLY a count of the elements!
        - its the greatest numeric index plus one!
            - for example: `let fruits = []`
                        `fruits[123] = "apple"
                        `alert( fruits.length ); shows 124, for a one item array!`
                - of course, array's arent usually used like that.
    - another quirk of the length property is that it is writeable!
        - if we increase it manually, nothing interesting happens
        - **BUT** if we decrease it, the array is truncated **irreversibly**
            - this means the simplest way to clear an array is `arrayName.length = 0;`
## Array Methods
- Negative indexes are allowed array methods! as usual, they specify position from the end.
### Queue/Stack management
- See base Array notes for more details on these 4 methods (for now? move them?)
#### .push(...items)
array.push(...items): adds items to the end
#### .pop()
array.pop(): extracts an item from the end (and uses it a la 'return')
#### .shit()
array.shift(): extracts an item from the front (and uses it a la 'return'). Adjusts all item positions.
#### .unshift(...items)
array.unshift(...items): adds items to the beginning. Adjusts all item positions.
### .splice
- if we use `delete arrayName[1];` it will remove the value, but leave the position (key), so the .length is still the same!
- arrayName.splice() can insert, remove and replace elements!
    - it 'returns' the items deleted! So to use the deleted items, use like an expressed function, to use the array less the deleted/as modified use the original array name
- `arrayName.splice(start[, deleteCount, elem1, ... elemN])
    - modifies arrayName from index 'start', removes 'deleteCount' elements, and then inserts [elem1,...elemN]
```js title:"array.splice() deletion"
let arr = ["I", "study", "JavaScript"];

arr.splice(1,1); //from index 1, remove one element

console.log(arr); //logs: ["I", "JavaScript"]
```

```js title:"array.splice() delete & replace"
let arr = ["I", "study", "JavaScript", "right", "now"];

sliced = arr.splice(0,3, "Let's", "dance"); //from index 0, remove three elements, and replace with ["Let's", "dance"]

console.log(arr); //logs: ["Let's", "dance", "right", "now"]
BUT
console.log(sliced); //logs ["I", "study", "JavaScript"]!
```

```js title:"array.splice() addition"
let arr = ["I", "study", "JavaScript"];

arr.splice(2,0, "complex", "language"); //from index 2, add ["complex","language"]

console.log(arr); //logs: ["I", "study", "complex", "language", "JavaScript"]
```

### .slice()
- arrayName.slice( [start], [end] )
    - this returns a NEW array copying all items from index 'start' to index 'end' (inclusive?... no... kinda. includes the 'start' but not the 'end'). BOTH start & end can be negative, in which case position from end of array is used.
    ```js title:".slice() eg"
    let arrayName = ["t", "e", "s", "t"];
    
    alert( arrayName.slice(1, 3) ); //alerts e,s!
    alert( arrayName.slice(-2) ); // alerts s,t!
    
    arrayName.slice() creates a copy of arrayName; // can use to further transform without affecting original array.
    ```
## and so many more....
.concat()
## .iterate
.forEach()

## Searching in array
.indexOf - has quirks wrt false, NaN
.includes
.lastIndexOf

.find()
.findIndex()
.findLastIndex()

.filter()

## Transform an array
.map()
#### .sort() - modifies the OG array! - sorts as strings so order [1,10, 2] results unless accounted for in function
```js
function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}
OR could instead have:
function compareNumeric(a, b) {
    return a - b;
}
OR arrow function:
arrayName.sort( (a, b) => a - b ); 

let arrayName = [ 1, 2, 15]
arrayName.sort(); ~> [ 1, 15, 2];
arrayName.sort(compareNumeric); ~> [ 1, 2, 15]
}
```
for strings unless only in pure english, better to use string.localeCompare method, which will allow for accents, etc. properly
## . tranform cont
.reverse()
.split()
.join()

.reduce() & .reduceRight() - used to calc a single value an the array
.isArray() (typeof() just tells you its a object)

## Parameter thisArg
- *almost* all methods that call functions (eg. find, filter, map; but NOT sort) accept an optional parameter: `thisArg`
    - didn't really understand what it was saying as it was talking alot about general objects soooooo.... #later-lesson 

# and more methods!

# reduce, map and filter seem to be most important?