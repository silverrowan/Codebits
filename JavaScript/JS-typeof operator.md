## typeof Operator
use as: typeof variable or typeof(variable or expression)
this operator returns the 'type' of the operand
useful as a quick check or when processing values of diff types.
eg. 
```js
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
 - \* Math is a built-in object of matmatical operations.
- \*\* the result here is an OFFICIALL RECOGNIZED ERROR in typeof.
	this error is kept for compatibility, as null is NOT an object. it is its own type.
- \*\*\* the response is "function" because alert is a function but this is NOT an actual data type in JavaScript.
******
JS-Data Types -> JS-typeof operator on 2025-11-05