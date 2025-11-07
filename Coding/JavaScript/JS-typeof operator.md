## typeof Operator
use as: `typeof variable` or `typeof(variable or expression)`
this operator returns the 'type' of the operand
useful as a quick check or when processing values of diff types.
```js title:eg.
typeof undefined // undefined
typeof 0 //number
typeof 10n //bigint
typeof true //boolean
typeof "foo" //string
typeof Symbol("id") // symbol
typeof Math //object *
typeof null //object **
typeof alert //function ***
```
 - \* Math is a built-in object of mathematical operations.
- \*\* the result here is an ***OFFICIALLY RECOGNIZED & MAINTAINED ERROR*** in typeof.
    - null is NOT an object. it is its own type.
    - this error is kept for compatibility with older code.
- \*\*\* the response is "function" because alert is a function but this is NOT an actual data type in JavaScript. *Functions are a special type of object.*
******
JS-Data Types -> JS-typeof operator on 2025-11-05